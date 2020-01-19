import React from "react";
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
        {formikProps => (
          <form onSubmit={formikProps.handleSubmit}>
            <label htmlFor="partyName">Party Name:</label>
            <input
              name="partyName"
              id="partyName"
              type="text"
              onBlur={formikProps.handleBlur}
              value={formikProps.values.partyName}
              onChange={formikProps.handleChange}
            />
            <PeopleList formikProps={formikProps} />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
