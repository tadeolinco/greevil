import styled, { css } from 'styled-components/macro';

export const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: #42a5f5;
  color: white;
  text-align: center;

  ${props => {
    if (props.variant === 'negative') {
      return css`
        background-color: #ef5350;
      `;
    }
  }}
`;
