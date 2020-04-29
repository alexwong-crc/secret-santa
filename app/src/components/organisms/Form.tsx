import React from 'react';
import { Grid } from '@/atoms';
import { Person, FormHeaders, AddButton } from '@/molecules';
import { Form as FormikForm, FormikProps, FieldArray, FieldArrayRenderProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { uuid } from 'uuidv4';

interface IForm {
  formik: FormikProps<IFormikValues>;
}

const Form: React.FC<IForm> = ({ formik }: IForm) => {
  const { values } = formik;

  const addPerson = (arrayHelper: FieldArrayRenderProps) => (): void => {
    arrayHelper.push({ uuid: uuid(), name: '', email: '' });
  };

  const removePerson = (arrayHelper: FieldArrayRenderProps, index: number) => (): void => {
    arrayHelper.remove(index);
  };

  return (
    <FormikForm>
      <FieldArray name="people">
        {(arrayHelper: FieldArrayRenderProps): React.ReactElement => {
          return (
            <>
              <Grid>
                <FormHeaders />
                {values.people.map(({ uuid }, index) => {
                  return <Person key={uuid} index={index} formik={formik} remove={removePerson(arrayHelper, index)} />;
                })}
              </Grid>
              <AddButton onClick={addPerson(arrayHelper)}>Add</AddButton>
            </>
          );
        }}
      </FieldArray>
      <button type="submit">Submit</button>
    </FormikForm>
  );
};

export default Form;
