import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { addMonths, format } from 'date-fns';
import { isAfter } from 'date-fns/esm';
import { useFormik } from 'formik';
import usePrevious from 'hooks/usePrevious';
import localforage from 'localforage';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import uuid from 'uuid/v4';
import { BudgetForm, BudgetPageContainer } from './styled';

const NewBudget = () => {
  const history = useHistory();
  const params = useParams();
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const category = categories[params.categoryId];
  const prevCategory = usePrevious(category);

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: { date: format(new Date(), 'yyyy-MM'), amount: '' },
    onSubmit: data => {
      if (isAfter(new Date(data.date), new Date())) {
        return alert('Cannot assign budget to date before today');
      }
      const existing = Object.values(category.budgets).find(
        budget => format(new Date(budget.date), 'yyyy-MM') === data.date
      );

      if (existing) {
        alert('Budget for that month already exists');
      } else {
        const id = uuid();
        localforage
          .setItem('categories', {
            ...categories,
            [params.categoryId]: {
              ...category,
              budgets: {
                ...category.budgets,
                [id]: {
                  id,
                  date: new Date(data.date),
                  amount: data.amount,
                },
              },
            },
          })
          .then(_categories => {
            convertData(_categories, dispatch);
            history.goBack();
          });
      }
    },
  });

  useEffect(() => {
    if (!prevCategory && !!category) {
      let lastBudget = null;
      for (const id in category.budgets) {
        const budget = category.budgets[id];
        if (!lastBudget) lastBudget = budget;
        if (new Date(budget.date) < new Date(lastBudget.date)) {
          lastBudget = budget;
        }
      }

      if (new Date(values.date) < new Date(lastBudget.date)) {
        setFieldValue(format(addMonths(new Date(lastBudget.date)), 'yyyy-MM'));
      }
    }
  }, [category, prevCategory, setFieldValue, values.date]);

  return (
    <BudgetPageContainer>
      <BudgetForm>
        <BackButton />
        <Input
          type="month"
          label="Month"
          name="date"
          value={values.date}
          onChange={event => {
            event.persist();
            const value = event.target.value;
            const existing = Object.keys(category.budgets).find(
              id =>
                format(new Date(category.budgets[id].date), 'yyyy-MM') === value
            );
            if (existing) {
              alert('Budget for that month already allocated');
            } else {
              handleChange(event);
            }
          }}
        />
        <Input
          type="number"
          label="Amount"
          name="amount"
          value={values.amount}
          onChange={handleChange}
        />
      </BudgetForm>
      <Button type="button" onClick={handleSubmit} style={{ width: '100%' }}>
        Add Budget
      </Button>
    </BudgetPageContainer>
  );
};

export default NewBudget;
