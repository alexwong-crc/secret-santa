import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const InputSC = styled.input`
  padding: 0.5rem 0;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${Colour.getHex('white')};
`;

interface IProps {
  name: string;
  value: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: () => void;
  type: string;
}

const Input: React.FC<IProps> = ({ name, value, id, className, placeholder, onChange, type }: IProps) => {
  return (
    <InputSC
      name={name}
      value={value}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
