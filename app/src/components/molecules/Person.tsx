import React from 'react';
import { Cell, Input, Text, DeleteButton } from '@/atoms';
import { Field, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  formik: FormikProps<IFormikValues>;
  index: number;
  remove: () => void;
}

const Person: React.FC<IProps> = ({ index, formik, remove }: IProps) => {
  return (
    <>
      <Cell column="number">
        <Text fontFamily="'Satisfy', sans-serif">{index + 1}.</Text>
      </Cell>
      <Cell column="name">
        <Field name={`people[${index}].name`} type="text" as={Input} placeholder="Mr. Santa Claus" />
      </Cell>
      <Cell column="email">
        <Field name={`people[${index}].email`} type="email" as={Input} placeholder="santa-claus@northpole.com" />
      </Cell>
      <Cell column="validation">
        {!formik.errors?.people?.[index] && formik.touched?.people?.[index] && (
          <FontAwesomeIcon icon={faCheckCircle} color={Colour.getHex('highlight')} />
        )}
      </Cell>
      <Cell column="delete">
        <DeleteButton onClick={remove} />
      </Cell>
    </>
  );
};

export default Person;
