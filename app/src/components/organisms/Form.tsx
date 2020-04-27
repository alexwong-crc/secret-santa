import React from 'react';
import { Grid } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps, FieldArray, FieldArrayRenderProps } from 'formik';
import { IFormik } from '@/types/form';
import { uuid } from 'uuidv4';

interface IForm {
  formik: FormikProps<IFormik>;
}

const Form: React.FC<IForm> = ({ formik }: IForm) => {
  console.log(formik);
  const { values } = formik;
  return (
    <FormikForm>
      <FieldArray name="people">
        {(arrayHelper: FieldArrayRenderProps): React.ReactElement => {
          return (
            <>
              <Grid>
                <FormHeaders />
                {values.people.map(({ uuid }, index) => {
                  return <Person key={uuid} personId={uuid} index={index} />;
                })}
              </Grid>
              <button type="button" onClick={(): void => arrayHelper.push({ uuid: uuid(), name: '', email: '' })}>
                Add
              </button>
            </>
          );
        }}
      </FieldArray>
      <button type="submit">Submit</button>
    </FormikForm>
  );
};

export default Form;
