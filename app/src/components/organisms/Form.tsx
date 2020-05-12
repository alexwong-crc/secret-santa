import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, AddButton, Button, FormPage } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps, FieldArray, FieldArrayRenderProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { uuid } from 'uuidv4';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  > * + * {
    margin-left: 1rem;
  }
`;

interface IForm {
  formik: FormikProps<IFormikValues>;
}

const Form: React.FC<IForm> = ({ formik }: IForm) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageOrder = ['partySetup', 'peopleSetup'];
  const { values } = formik;

  const addPerson = (arrayHelper: FieldArrayRenderProps) => (): void => {
    arrayHelper.push({ uuid: uuid(), name: '', email: '' });
  };

  const removePerson = (arrayHelper: FieldArrayRenderProps, index: number) => (): void => {
    arrayHelper.remove(index);
  };

  const nextPage = (): void => setPageIndex(pageIndex + 1);

  const previousPage = (): void => setPageIndex(pageIndex - 1);

  return (
    <FormikForm>
      <FormPage id="partySetup" currentPage={pageOrder[pageIndex]}>
        Hi
        <Button type="button" onClick={nextPage}>
          Next
        </Button>
      </FormPage>
      <FormPage id="peopleSetup" currentPage={pageOrder[pageIndex]}>
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
        <ButtonContainer>
          <Button type="button" onClick={previousPage} outline>
            Back
          </Button>
          <Button type="submit">Schedule party</Button>
        </ButtonContainer>
      </FormPage>
    </FormikForm>
  );
};

export default Form;
