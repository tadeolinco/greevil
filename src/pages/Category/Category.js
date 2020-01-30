import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { Row } from 'components/Layout';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import localforage from 'localforage';
import React, { useCallback, useEffect } from 'react';
import { FaPen, FaPlusCircle, FaTimes } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import {
  BudgetContainer,
  CategoryContainer,
  CategoryForm,
  SectionTitle,
} from './styled';

const Category = () => {
  const params = useParams();
  const history = useHistory();
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const category = categories[params.id];

  const {
    values,
    handleChange,
    setFieldValue,
    setFormikState,
    handleSubmit,
  } = useFormik({
    initialValues: { name: '', budgets: [] },
    onSubmit: data => {
      if (!data.name) {
        return alert('Must have name');
      }
      const newBudgets = { ...category.budgets };

      for (const budgetId in newBudgets) {
        if (!data.budgets.find(budget => budget.id === budgetId)) {
          delete newBudgets[budgetId];
        }
      }

      const newCategories = {
        ...categories,
        [params.id]: {
          ...category,
          name: data.name,
          budgets: newBudgets,
        },
      };

      localforage.setItem('categories', newCategories).then(_categories => {
        convertData(_categories, dispatch);
        history.goBack();
      });
    },
  });

  useEffect(() => {
    if (category) {
      const budgets = Object.keys(category.budgets)
        .map(id => ({
          ...category.budgets[id],
          date: format(new Date(category.budgets[id].date), 'yyyy-MM'),
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      setFormikState({ values: { name: category.name, budgets } });
    }
  }, [category, setFormikState]);

  const handleRemoveBudget = useCallback(
    budget => {
      if (
        window.confirm('Are you sure you want to delete this budget entry?')
      ) {
        setFieldValue(
          'budgets',
          values.budgets.filter(_budget => _budget.id !== budget.id)
        );
      }
    },
    [setFieldValue, values.budgets]
  );

  const handleRemoveCategory = useCallback(() => {
    if (window.confirm('Are you sure want to delete this category?')) {
      const newCategories = { ...categories };
      delete newCategories[params.id];
      localforage.setItem('categories', newCategories).then(_categories => {
        convertData(_categories, dispatch);
        history.goBack();
      });
    }
  }, [categories, dispatch, history, params.id]);

  if (!category) return null;

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
        <SectionTitle>
          <h6>Budgets</h6>
          <button
            type="button"
            onClick={() => history.push(`/category/${params.id}/budget`)}
          >
            <FaPlusCircle />
          </button>
        </SectionTitle>
        {values.budgets.map(budget => (
          <BudgetContainer key={budget.id}>
            <div>{format(new Date(budget.date), 'MMM yyyy')}</div>
            <div style={{ textAlign: 'right' }}>{budget.amount}</div>
            <button
              type="button"
              onClick={() =>
                history.push(`/category/${category.id}/budget/${budget.id}`)
              }
            >
              <FaPen />
            </button>
            {values.budgets.length > 1 && (
              <button type="button" onClick={() => handleRemoveBudget(budget)}>
                <FaTimes />
              </button>
            )}
          </BudgetContainer>
        ))}
      </CategoryForm>
      <Row>
        <Button
          variant="negative"
          type="button"
          onClick={handleRemoveCategory}
          style={{ flex: 1 }}
        >
          Remove Category
        </Button>
        <Button type="button" onClick={handleSubmit} style={{ flex: 1 }}>
          Edit Category
        </Button>
      </Row>
    </CategoryContainer>
  );
};

export default Category;
