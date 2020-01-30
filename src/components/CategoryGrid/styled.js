import styled, { css } from 'styled-components/macro';

export const CategoryGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`;

export const CategoryGridCell = styled.div`
  background-color: #f5f5f5;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #e0e0e0;
  cursor: pointer;
`;

export const CategoryText = styled(CategoryGridCell)``;

export const CategoryAmountLeft = styled(CategoryGridCell)`
  text-align: right;
  ${({ sign }) => {
    if (sign === 'positive')
      return css`
        color: #66bb6a;
      `;
    if (sign === 'negative')
      return css`
        color: #ef5350;
      `;
    if (sign === 'zero')
      return css`
        color: #bdbdbd;
      `;
  }}
`;

export const CategoryBudget = styled(CategoryGridCell)`
  color: #42a5f5;
  text-align: right;
`;
