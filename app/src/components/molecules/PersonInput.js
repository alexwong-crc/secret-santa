import React from "react";
import { InputField } from "../atoms/InputField";
import { Container } from "../atoms/Container";

export default props => {
  return (
    <Container>
      <InputField
        id={props.id}
        label="Name"
        type="text"
        name="name"
        formikProps={props.formikProps}
      />
      <InputField
        id={props.id}
        label="Email"
        type="text"
        name="email"
        formikProps={props.formikProps}
      />
    </Container>
  );
};
