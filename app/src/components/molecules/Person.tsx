import React from 'react';
import { Cell, Input, Text, DeleteButton } from '@/atoms';
import { Field, FormikProps, useFormikContext } from 'formik';
import { IFormikValues } from '@/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  index: number;
  remove: () => void;
}

const Person: React.FC<IProps> = ({ index, remove }: IProps) => {
  const { errors, touched }: FormikProps<IFormikValues> = useFormikContext();
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
        {!errors?.people?.[index] && touched?.people?.[index] && (
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
