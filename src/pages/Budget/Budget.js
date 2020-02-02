import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { format, isAfter } from 'date-fns';
import { useFormik } from 'formik';
import localforage from 'localforage';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BudgetForm, BudgetPageContainer } from './styled';

const Budget = () => {
  const params = useParams();
  const history = useHistory();
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const category = categories[params.categoryId];
  const budget = category ? category.budgets[params.budgetId] : null;

  const { values, handleChange, setFormikState, handleSubmit } = useFormik({
    initialValues: { date: new Date(), amount: '' },
    onSubmit: data => {
      localforage
        .setItem('categories', {
          ...categories,
          [params.categoryId]: {
            ...category,
            budgets: {
              [params.budgetId]: {
                ...budget,
                amount: +data.amount,
                date: new Date(data.date),
              },
            },
          },
        })
        .then(categories => {
          convertData(categories, dispatch);
          history.goBack();
        });
    },
  });

  useEffect(() => {
    if (!!category && !!budget) {
      setFormikState({
        values: {
          date: format(new Date(budget.date), 'yyyy-MM'),
          amount: budget.amount,
        },
      });
    }
  }, [budget, category, setFormikState]);

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
            if (isAfter(new Date(value), new Date())) {
              return alert('Cannot assign budget to date before today');
            }

            const existing = Object.keys(category.budgets).find(
              id =>
                format(new Date(category.budgets[id].date), 'yyyy-MM') ===
                  value && id !== budget.id
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
        Edit Budget
      </Button>
    </BudgetPageContainer>
  );
};

export default Budget;
