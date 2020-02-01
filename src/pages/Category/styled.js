import { Column, Row } from 'components/Layout';
import styled from 'styled-components/macro';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const CategoryForm = styled.form`
  padding: 0.5rem;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;

  form {
    flex: 1;
  }
`;

export const Title = styled(Row)`
  align-items: center;
  margin-bottom: 1rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  h6 {
    line-height: 1;
  }
`;

export const BudgetContainer = styled(Row)`
  align-items: center;
  margin-bottom: 1rem;

  div {
    flex: 1;
  }

  button {
    margin-left: 1rem;
  }
`;

export const BudgetInputContainer = styled(Column)`
  border-bottom: 0.2rem solid #bdbdbd;
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  button {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }
`;
