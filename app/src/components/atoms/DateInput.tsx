import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';
import { ErrorMessage, useField } from 'formik';
import IconValidation from './IconValidation';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Colour = new ColourTheme();

interface IContainer {
  label?: string;
  information?: string;
}

const Container = styled.div<IContainer>`
  display: flex;
  border-bottom: 2px solid transparent;
  /* align-items: center; */
  justify-content: flex-start;
  width: 100%;
  > * + * {
    margin-left: 1rem;
  }
`;

const LabelSC = styled.label`
  font-family: 'Satisfy', serif;
  color: ${Colour.getHex('highlight')};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  align-self: flex-start;
`;

const InputSC = styled.input`
  width: 4rem;
  text-align: center;
  background-color: ${Colour.getRgba('white', 0.1)};
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0;
  border-radius: 0.4rem;
  padding: 0.5rem 0;
  color: ${Colour.getHex('white')};
  border-bottom: 2px solid transparent;
  :focus {
    border-bottom: 2px solid ${Colour.getHex('action')};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface IProps extends Partial<IContainer> {
  value: Date;
  name: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: () => void;
  type: string;
  onBlur: () => void;
}

const today = new Date();

const DateInput: React.FC<IProps> = ({ name, value, onChange, onBlur, label, information }: IProps) => {
  const [field, meta, helpers] = useField(name);
  const onDateChange = (event: Date): void => {
    helpers.setValue(event);
  };

  return (
    <>
      {label ? <LabelSC htmlFor={name}>{label}</LabelSC> : null}
      <Container>
        <DatePicker
          minDate={new Date()}
          placeholderText="dd / mm / yyyy"
          dateFormat="dd/MM/yyyy"
          selected={value}
          onChange={onDateChange}
        />

        <ErrorMessage name={name} component={IconValidation} />
      </Container>
    </>
  );
};

export default DateInput;
