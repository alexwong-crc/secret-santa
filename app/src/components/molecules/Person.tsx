import React from 'react';
import styled from 'styled-components';
import { Cell, Input } from '@/atoms';
import { Field } from 'formik';

const PersonSC = styled.div``;

const Person = () => {
  return (
    <>
      <Cell column="number">number</Cell>
      <Cell column="name">
        <Field name="name" placeholder="name" as={Input} />
      </Cell>
      <Cell column="email">
        <Field name="email" type="email" placeholder="email" as={Input} />
      </Cell>
      <Cell column="validation">validation</Cell>
    </>
  );
};

export default Person;
