import { differenceInCalendarMonths, startOfMonth } from 'date-fns/esm';
import localforage from 'localforage';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const DBStateContext = createContext();
const DBDispatchContext = createContext();

export const convertData = (categories, dispatch) => {
  const meta = {};
  for (const id in categories) {
    const category = categories[id];

    meta[id] = {
      budget: 0,
      assets: 0,
    };
    console.log(category);

    const budgets = Object.keys(category.budgets)
      .map(id => category.budgets[id])
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    const lastBudget = budgets[budgets.length - 1];
    meta[id].budget = lastBudget.amount;

    for (let i = 0; i < budgets.length; i++) {
      const currBudget = budgets[i];
      const nextBudget = budgets[i + 1];
      if (nextBudget) {
        meta[id].assets +=
          differenceInCalendarMonths(nextBudget.date, currBudget.date) *
          currBudget.amount;
      } else {
        meta[id].assets +=
          (differenceInCalendarMonths(
            startOfMonth(new Date()),
            currBudget.date
          ) +
            1) *
          currBudget.amount;
      }
    }

    for (const transaction of category.transactions) {
      meta[id].assets -= transaction.amount;
    }
  }

  dispatch({ type: 'SET_META', payload: meta });
  dispatch({ type: 'SET_CATEGORIES', payload: categories });
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.id]: action.payload,
        },
      };
    }

    case 'SET_CATEGORIES': {
      return { ...state, categories: action.payload };
    }

    case 'SET_META': {
      return { ...state, meta: action.payload };
    }

    default:
      return state;
  }
};

export const DBContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    categories: {},
    meta: {},
  });

  useEffect(() => {
    // localforage.clear();
    localforage.getItem('categories').then(categories => {
      if (categories) {
        convertData(categories, dispatch);
      }
    });
  }, []);

  return (
    <DBStateContext.Provider value={state}>
      <DBDispatchContext.Provider value={dispatch}>
        {children}
      </DBDispatchContext.Provider>
    </DBStateContext.Provider>
  );
};

export const useDBState = () => {
  return useContext(DBStateContext);
};

export const useDBDispatch = () => {
  return useContext(DBDispatchContext);
};
