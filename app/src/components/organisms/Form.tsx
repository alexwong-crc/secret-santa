import React from 'react';
import { Grid } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps } from 'formik';
import { IFormik } from '@/types/form';

interface IForm {
  formik: FormikProps<IFormik>;
}

interface IState {
  people: number;
}

const Form: React.FC<IForm> = ({ formik }: IForm) => {
  return (
    <FormikForm>
      <Grid>
        <FormHeaders />
        {Object.keys(formik.values).map((personId, index) => (
          <Person key={personId} personId={personId} index={index} />
        ))}
      </Grid>
      <button type="submit">Submit</button>
    </FormikForm>
  );
};

export default Form;
