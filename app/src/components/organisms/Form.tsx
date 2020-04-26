import React from 'react';
import { Form as FormikForm, Field, FormikProps } from 'formik';
import { IFormik } from '@/types/form';

interface IForm {
  formik: FormikProps<IFormik>;
}

const Form: React.FC<IForm> = (props: IForm) => {
  return (
    <>
      <FormikForm>
        <Field name="name" />
        <button type="submit">Submit</button>
      </FormikForm>
    </>
  );
};

export default Form;
