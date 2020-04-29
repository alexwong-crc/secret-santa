import React from 'react';
import { Cell, Input, Header, Text } from '@/atoms';
import { Field, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  formik: FormikProps<IFormikValues>;
  index: number;
}

const Person: React.FC<IProps> = ({ index, formik }: IProps) => {
  return (
    <>
      <Cell column="number">
        <Text fontFamily="'Satisfy', sans-serif">{index + 1}.</Text>
      </Cell>
      <Cell column="name">
        <Field name={`people[${index}].name`} type="text" as={Input} />
      </Cell>
      <Cell column="email">
        <Field name={`people[${index}].email`} type="email" as={Input} />
      </Cell>
      <Cell column="validation">
        {!formik.errors?.people?.[index] && formik.touched?.people?.[index] && (
          <FontAwesomeIcon icon={faCheckCircle} color={Colour.getHex('highlight')} />
        )}
      </Cell>
    </>
  );
};

export default Person;
