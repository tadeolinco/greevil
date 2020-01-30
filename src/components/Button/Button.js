import React from 'react';
import { StyledButton } from './styled';

const Button = ({ className, children, ...props }) => {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
