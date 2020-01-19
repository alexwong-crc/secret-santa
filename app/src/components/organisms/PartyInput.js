import React, { useState } from "react";
import { PeopleList } from "../molecules/PeopleList";
import { Formik } from "formik";

const formInitialValues = {
  partyName: ""
};

export default () => {
  const formOnSubmit = props => {
    console.log(props);
  };
  return (
    <div>
      <Formik initialValues={formInitialValues} onSubmit={formOnSubmit}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="partyName">Party Name:</label>
            <input
              name="partyName"
              id="partyName"
              type="text"
              onBlur={props.handleBlur}
              value={props.values.partyName}
              onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
      <PeopleList />
    </div>
  );
};
