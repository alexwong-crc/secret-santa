import React from "react";
import { InputField } from "../atoms/InputField";
import { Container } from "../atoms/Container";

export default () => {
  return (
    <Container>
      <InputField detail="Name" />
      <InputField detail="Email" />
    </Container>
  );
};
