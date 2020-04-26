import React from 'react';
import { Grid } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps } from 'formik';
import { IFormik } from '@/types/form';

interface IForm {
  formik: FormikProps<IFormik>;
}

const Form: React.FC<IForm> = (props: IForm) => {
  return (
    <>
      <FormikForm>
        <Grid>
          <FormHeaders />
          <Person />
        </Grid>
        <button type="submit">Submit</button>
      </FormikForm>
    </>
  );
};

export default Form;
