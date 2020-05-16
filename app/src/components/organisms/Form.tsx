import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, AddButton, Button, FormPage, Input, DateInput } from '@/atoms';
import { Person, FormHeaders } from '@/molecules';
import { Form as FormikForm, FormikProps, FieldArray, FieldArrayRenderProps, Field } from 'formik';
import { IFormikValues, FormikValuesKey } from '@/types/form';
import { uuid } from 'uuidv4';

const ContainerSC = styled.div`
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
  const { values, errors } = formik;

  const addPerson = (arrayHelper: FieldArrayRenderProps) => (): void => {
    arrayHelper.push({ uuid: uuid(), name: '', email: '' });
  };

  const removePerson = (arrayHelper: FieldArrayRenderProps, index: number) => (): void => {
    arrayHelper.remove(index);
  };

  const nextPage = (): void => setPageIndex(pageIndex + 1);

  const previousPage = (): void => setPageIndex(pageIndex - 1);

  const areFieldsValid = (keys: FormikValuesKey[]): boolean => {
    return keys.every((key) => {
      if (errors[key] || !values[key]) {
        return false;
      }
      return true;
    });
  };

  return (
    <FormikForm>
      <FormPage id="partySetup" currentPage={pageOrder[pageIndex]}>
        <Field label="Party Name" name="partyName" type="text" as={Input} />
        <Field
          label="Party Owner"
          name="partyOwner"
          type="text"
          as={Input}
          information="This is to inform the recipients who invited them."
        />
        <Field label="Party Date" name="partyDate" as={DateInput} />
        <Button type="button" onClick={nextPage} disabled={!areFieldsValid(['partyName', 'partyOwner', 'partyDate'])}>
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
        <ContainerSC>
          <Button type="button" onClick={previousPage} outline>
            Back
          </Button>
          <Button type="submit">Schedule party</Button>
        </ContainerSC>
      </FormPage>
    </FormikForm>
  );
};

export default Form;
