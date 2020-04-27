import React from 'react';
import { Cell, Input } from '@/atoms';
import { Field } from 'formik';

interface IProps {
  personId: string;
  index: number;
}

const Person: React.FC<IProps> = ({ personId, index }: IProps) => {
  return (
    <>
      <Cell column="number">{index + 1}</Cell>
      <Cell column="name">
        <Field name={`${personId}.name`} type="text" as={Input} />
      </Cell>
      <Cell column="email">
        <Field name={`${personId}.email`} type="email" as={Input} />
      </Cell>
      <Cell column="validation">validation</Cell>
    </>
  );
};

export default Person;
