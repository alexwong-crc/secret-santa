import React from 'react';
import { Cell, Header } from '@/atoms';

const Person = () => {
  return (
    <>
      <Cell column="name">
        <Header level="h6" colour="highlight" margin="0">
          Name
        </Header>
      </Cell>
      <Cell column="email">
        <Header level="h6" colour="highlight" margin="0">
          Email
        </Header>
      </Cell>
    </>
  );
};

export default Person;
