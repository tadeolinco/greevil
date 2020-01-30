import styled from 'styled-components/macro';

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.wrap || 'wrap'};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;
