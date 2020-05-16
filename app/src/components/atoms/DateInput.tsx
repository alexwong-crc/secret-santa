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
  justify-content: flex-start;
  align-items: center;
  width: 13rem;
  background-color: ${Colour.getRgba('white', 0.1)};
  border: none;
  border-radius: 0.4rem;
  border-bottom: 2px solid transparent;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  :focus-within {
    border-bottom: 2px solid ${Colour.getHex('action')};
  }
  > * + * {
    margin-left: 1rem;
  }

  /* Styling the react date picker */
  .dateInput {
    color: ${Colour.getHex('white')};
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    ::placeholder {
      color: ${Colour.getRgba('white', 0.6)};
    }
  }
  .react-datepicker {
    /* Modal background colour */
    background-color: ${Colour.getHex('white')};
    border: 2px solid ${Colour.getHex('white')};
    /* Month navigation arrows */
    button.react-datepicker__navigation {
      outline: none;
    }
    button.react-datepicker__navigation--next {
      border-left-color: ${Colour.getHex('action')};
    }
    button.react-datepicker__navigation--previous {
      border-right-color: ${Colour.getHex('action')};
    }
    /* Modal header */
    .react-datepicker__header {
      background-color: ${Colour.getHex('secondary')};
      font-family: 'Open Sans', sans-serif;
      .react-datepicker__current-month {
        font-family: 'Satisfy', sans-serif;
        color: ${Colour.getHex('highlight')};
        font-size: 1.2rem;
      }
      .react-datepicker__day-name {
        color: ${Colour.getHex('white')};
      }
    }
    /* Modal month calendar */
    .react-datepicker__month {
      font-family: 'Open Sans', sans-serif;
      .react-datepicker__day {
        outline: none;
        color: ${Colour.getHex('secondary')};
        :hover {
          color: ${Colour.getHex('white')};
          background-color: ${Colour.getHex('secondary')};
        }
        &.react-datepicker__day--outside-month {
          color: ${Colour.getRgba('secondary', 0.5)};
          :hover {
            color: ${Colour.getHex('white')};
          }
          &.react-datepicker__day--disabled {
            color: ${Colour.getRgba('secondary', 0.1)};
          }
        }
        &.react-datepicker__day--keyboard-selected,
        &.react-datepicker__day--selected {
          color: ${Colour.getHex('white')};
          background-color: ${Colour.getHex('action')};
        }
        &.react-datepicker__day--disabled {
          color: ${Colour.getRgba('secondary', 0.1)};
          :hover {
            color: ${Colour.getRgba('secondary', 0.1)};
            background-color: ${Colour.getHex('white')};
          }
        }
      }
    }
  }
`;

const LabelSC = styled.label`
  font-family: 'Satisfy', serif;
  color: ${Colour.getHex('highlight')};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  align-self: flex-start;
`;

interface IProps extends Partial<IContainer> {
  value: Date;
  name: string;
  id: string;
  className: string;
  placeholder: string;
  onChange: () => void;
}

const DateInput: React.FC<IProps> = ({ name, value, label }: IProps) => {
  const [field, meta, helpers] = useField(name);

  const onDateChange = (date: Date): void => {
    helpers.setTouched(true);
    helpers.setValue(date);
  };

  return (
    <>
      {label ? <LabelSC>{label}</LabelSC> : null}
      <Container>
        <DatePicker
          className="dateInput"
          minDate={new Date()}
          placeholderText="DD - MM - YYYY"
          dateFormat="dd - MM - yyyy"
          selected={value}
          onChange={onDateChange}
          value={field.value}
        />
        <ErrorMessage name={name} component={IconValidation} />
      </Container>
    </>
  );
};

export default DateInput;
