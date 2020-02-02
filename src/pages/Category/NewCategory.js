import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { format } from 'date-fns';
import { startOfDay } from 'date-fns/esm';
import { useFormik } from 'formik';
import localforage from 'localforage';
import React from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'uuid/v4';
import { CategoryContainer, CategoryForm } from './styled';

const NewCategory = () => {
  const history = useHistory();
  const dispatch = useDBDispatch();
  const { categories } = useDBState();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      budget: '',
      startMonth: format(new Date(), 'yyyy-MM'),
    },

    onSubmit: data => {
      if (!data.name) {
        return alert('Must have name');
      }
      const budgetId = uuid();
      const _category = {
        id: uuid(),
        name: data.name,
        budgets: {
          [budgetId]: {
            id: budgetId,
            date: startOfDay(new Date(data.startMonth)),
            amount: +data.budget,
          },
        },
        transactions: [],
      };

      localforage
        .setItem('categories', {
          ...categories,
          [_category.id]: _category,
        })
        .then(data => {
          convertData(data, dispatch);
          history.goBack();
        });
    },
  });

  return (
    <CategoryContainer>
      <CategoryForm>
        <BackButton />
        <Input
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          label="Budget"
          type="number"
          name="budget"
          value={values.budget}
          onChange={handleChange}
        />
        <Input
          label="Start Month"
          type="month"
          name="startMonth"
          value={values.startMonth}
          onChange={handleChange}
        />
      </CategoryForm>
      <Button type="button" onClick={handleSubmit} style={{ width: '100%' }}>
        Create Category
      </Button>
    </CategoryContainer>
  );
};

export default NewCategory;
