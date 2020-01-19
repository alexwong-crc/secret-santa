import React from "react";
import { Container } from "../atoms/Container";

export const InputField = props => {
  return (
    <Container>
      <label htmlFor={props.name + props.id}>{props.label}:</label>
      <input
        name={props.name + props.id}
        id={props.name + props.id}
        type={props.type}
        value={props.formikProps[props.name + props.id]}
        onChange={props.formikProps.handleChange}
        onBlur={props.formikProps.handleBlur}
      />
    </Container>
  );
};
