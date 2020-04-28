import React from 'react';
import { Cell, Input, Header } from '@/atoms';
import { Field, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import IconValidation from './IconValidation';

interface IProps {
  formik: FormikProps<IFormikValues>;
  index: number;
}

const Person: React.FC<IProps> = ({ index, formik }: IProps) => {
  return (
    <>
      <Cell column="number">
        <Header level="h6" colour="white" margin="0">
          {index + 1}.
        </Header>
      </Cell>
      <Cell column="name">
        <Field name={`people[${index}].name`} type="text" as={Input} />
      </Cell>
      <Cell column="email">
        <Field name={`people[${index}].email`} type="email" as={Input} />
      </Cell>
      <Cell column="validation">
        <IconValidation errors={formik.errors?.people?.[index]} touched={formik.touched?.people?.[index]} />
      </Cell>
    </>
  );
};

export default Person;
