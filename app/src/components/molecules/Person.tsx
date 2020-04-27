import React from 'react';
import { Cell, Input, Header } from '@/atoms';
import { Field } from 'formik';

interface IProps {
  personId: string;
  index: number;
}

const Person: React.FC<IProps> = ({ personId, index }: IProps) => {
  return (
    <>
      <Cell column="number">
        <Header level="h6" colour="white" margin="0">
          {index + 1}.
        </Header>
      </Cell>
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
