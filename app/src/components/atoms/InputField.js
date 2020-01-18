import React from "react";
import { Container } from "../atoms/Container";

export const InputField = props => {
  return (
    <Container>
      <div>{props.detail}:</div>
      <input />
    </Container>
  );
};
