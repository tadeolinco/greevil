import React from 'react';
import { InputContainer } from './styled';

const Input = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  row = false,
}) => {
  return (
    <InputContainer row={row} type={type}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
