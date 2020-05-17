import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';
import { ErrorMessage } from 'formik';
import IconValidation from './IconValidation';

const Colour = new ColourTheme();

interface IContainer {
  label?: string;
  information?: string;
}

const Container = styled.div<IContainer>`
  display: flex;
  background-color: ${Colour.getRgba('white', 0.1)};
  margin-bottom: ${({ label, information }): string => (label && !information ? '2rem' : '0rem')};
  border-bottom: 2px solid transparent;
  border-radius: 0.4rem;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  > * + * {
    margin-left: 1rem;
  }
  :focus-within {
    border-bottom: 2px solid ${Colour.getHex('action')};
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
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0;
  color: ${Colour.getHex('white')};
  ::placeholder {
    color: ${Colour.getRgba('white', 0.3)};
  }
`;

export const InformationSC = styled.div`
  color: ${Colour.getHex('white')};
  font-style: italic;
  font-size: 0.8rem;
  margin: 0.5rem 0 2rem;
`;

interface IProps extends Partial<IContainer> {
  value: string;
  name: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: () => void;
  type: string;
  onBlur: () => void;
}

const Input: React.FC<IProps> = ({
  name,
  value,
  className,
  placeholder,
  onChange,
  onBlur,
  type,
  label,
  information,
}: IProps) => {
  return (
    <>
      {label ? <LabelSC htmlFor={name}>{label}</LabelSC> : null}
      <Container label={label} information={information}>
        <InputSC
          name={name}
          value={value}
          id={name}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
        />
        <ErrorMessage name={name} component={IconValidation} />
      </Container>
      {information ? <InformationSC>{information}</InformationSC> : null}
    </>
  );
};

export default Input;
