import styled from 'styled-components/macro';

export const BudgetPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const BudgetForm = styled.form`
  padding: 0.5rem;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;

  form {
    flex: 1;
  }
`;
