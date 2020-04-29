import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';
import { ErrorMessage } from 'formik';
import IconValidation from './IconValidation';

const Colour = new ColourTheme();

const Container = styled.div`
  display: flex;
  background-color: ${Colour.getRgba('white', 0.1)};
  border-bottom: 2px solid transparent;
  border-radius: 0.4rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  > * + * {
    margin-left: 1rem;
  }
`;

const InputSC = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0;
  color: ${Colour.getHex('white')};
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
    <Container>
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
      <ErrorMessage
        name={name}
        // @ts-ignore
        component={IconValidation}
      />
    </Container>
  );
};

export default Input;
