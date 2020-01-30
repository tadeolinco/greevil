import styled, { css } from 'styled-components/macro';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.row &&
    css`
      flex: 1;
      flex-direction: row;
      margin-bottom: 0;
      justify-content: space-between;
    `}

  label {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.25rem;
    border-bottom: 1px solid #e0e0e0;
    color: #424242;
  }

  ${props =>
    props.type === 'number' &&
    css`
      input {
        text-align: right;
      }
    `}
`;
