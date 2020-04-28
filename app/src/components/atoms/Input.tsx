import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const InputSC = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  font-size: 1rem;
  color: ${Colour.getHex('white')};
  background-color: ${Colour.getRgba('white', 0.1)};
  border-radius: 0.4rem;
  &:focus {
    border-bottom: 2px solid ${Colour.getHex('action')};
  }
`;

interface IProps {
  value: string;
  name: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: () => void;
  type: string;
  onBlur: () => void;
}

const Input: React.FC<IProps> = ({ name, value, id, className, placeholder, onChange, onBlur, type }: IProps) => {
  return (
    <InputSC
      name={name}
      value={value}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      onBlur={onBlur}
    />
  );
};

export default Input;
