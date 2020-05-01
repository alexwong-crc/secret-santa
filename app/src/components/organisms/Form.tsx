import React from 'react';
import styled from 'styled-components';
import { Grid, AddButton, SubmitButton } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps, FieldArray, FieldArrayRenderProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { uuid } from 'uuidv4';

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

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
      <Container>
        <FieldArray name="people">
          {(arrayHelper: FieldArrayRenderProps): React.ReactElement => {
            return (
              <>
                <Grid>
                  <FormHeaders />
                  {values.people.map(({ uuid }, index) => {
                    return (
                      <Person key={uuid} index={index} formik={formik} remove={removePerson(arrayHelper, index)} />
                    );
                  })}
                </Grid>
                <AddButton onClick={addPerson(arrayHelper)}>Add</AddButton>
              </>
            );
          }}
        </FieldArray>
        <SubmitButton />
      </Container>
    </FormikForm>
  );
};

export default Form;
