import { useDBState } from 'context/DBContext';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CategoryAmountLeft,
  CategoryBudget,
  CategoryGridContainer,
  CategoryText,
} from './styled';

const getSign = number => {
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  return 'zero';
};

const CategoryTable = () => {
  const history = useHistory();
  const { categories, meta } = useDBState();

  return (
    <CategoryGridContainer>
      {Object.keys(categories).map(id => {
        const { name } = categories[id];
        const { assets, budget } = meta[id];

        return (
          <Fragment key={id}>
            <CategoryText>
              <span onClick={() => history.push(`/category/${id}`)}>
                {name}
              </span>
            </CategoryText>
            <CategoryAmountLeft sign={getSign(assets)}>
              <span onClick={() => history.push(`/category/${id}/transaction`)}>
                {assets > 0 && '+'}
                {assets.toLocaleString()}
              </span>
            </CategoryAmountLeft>
            <CategoryBudget>
              <span
                onClick={() => history.push(`/category/${id}/transactions`)}
              >
                {String(budget).toLocaleString()}
              </span>
            </CategoryBudget>
          </Fragment>
        );
      })}
    </CategoryGridContainer>
  );
};

export default CategoryTable;
