import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

export const BackButtonContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      margin-right: 0.5rem;
    }

    div {
      position: relative;
      top: 0.05rem;
    }
  }
`;

const BackButton = ({ className }) => {
  const history = useHistory();

  return (
    <BackButtonContainer className={className}>
      <button type="button" onClick={() => history.goBack()}>
        <FaChevronLeft />
        <div>Back</div>
      </button>
    </BackButtonContainer>
  );
};

export default BackButton;
