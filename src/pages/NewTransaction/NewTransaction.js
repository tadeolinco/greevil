import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { useFormik } from 'formik';
import localforage from 'localforage';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import uuid from 'uuid/v4';
import { TransactionForm, TransactionPageContainer } from './styled';

export const NewTransaction = () => {
  const history = useHistory();
  const params = useParams();
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const category = categories[params.id] || {};

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { amount: '0', description: '' },
    onSubmit: data => {
      const id = uuid();
      localforage
        .setItem('categories', {
          ...categories,
          [params.id]: {
            ...category,
            transactions: [
              ...category.transactions,
              {
                id,
                amount: +data.amount,
                description: data.description,
                date: new Date(),
              },
            ],
          },
        })
        .then(_categories => {
          convertData(_categories, dispatch);
          history.goBack();
        });
    },
  });

  return (
    <TransactionPageContainer>
      <TransactionForm>
        <BackButton />

        <p style={{ marginBottom: '1rem' }}>
          Transaction under{' '}
          <span style={{ fontWeight: 'bold' }}>{category.name}</span>
        </p>
        <Input
          label="Amount"
          type="number"
          name="amount"
          value={values.amount}
          onChange={handleChange}
        />
        <Input
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
      </TransactionForm>
      <Button type="button" onClick={handleSubmit}>
        Add Transaction
      </Button>
    </TransactionPageContainer>
  );
};
