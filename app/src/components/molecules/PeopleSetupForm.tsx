import React from 'react';
import styled from 'styled-components';
import { FieldArray, FieldArrayRenderProps, useFormikContext, FormikProps } from 'formik';
import { FormPage, Button, InformationSC, Grid, AddButton } from '@/atoms';
import { FormHeaders, Person } from '@/molecules';
import { FormikPages, IFormikValues } from '@/types/form';
import { uuid } from 'uuidv4';

const ContainerSC = styled.div`
  display: flex;
  justify-content: flex-end;
  > * + * {
    margin-left: 1rem;
  }
`;

interface IPartySetupForm {
  currentPage: FormikPages;
  nextPage: () => void;
  previousPage: () => void;
}

const PeopleSetupForm: React.FC<IPartySetupForm> = ({ currentPage, previousPage }: IPartySetupForm) => {
  const { values, isValid, isSubmitting }: FormikProps<IFormikValues> = useFormikContext();

  const addPerson = (arrayHelper: FieldArrayRenderProps) => (): void => {
    arrayHelper.push({ uuid: uuid(), name: '', email: '' });
  };

  const removePerson = (arrayHelper: FieldArrayRenderProps, index: number) => (): void => {
    arrayHelper.remove(index);
  };

  return (
    <FormPage id="peopleSetup" currentPage={currentPage}>
      <FieldArray name="people">
        {(arrayHelper: FieldArrayRenderProps): React.ReactElement => {
          return (
            <>
              <Grid>
                <FormHeaders />
                {values.people.map(({ uuid }, index) => {
                  return <Person key={uuid} index={index} remove={removePerson(arrayHelper, index)} />;
                })}
              </Grid>
              <AddButton onClick={addPerson(arrayHelper)}>Add</AddButton>
            </>
          );
        }}
      </FieldArray>
      {values.people.length < 3 ? <InformationSC>At least 3 people needed for a party.</InformationSC> : null}
      <ContainerSC>
        <Button type="button" onClick={previousPage} outline>
          Back
        </Button>
        <Button type="submit" disabled={!isValid || isSubmitting}>
          Schedule party
        </Button>
      </ContainerSC>
    </FormPage>
  );
};

export default PeopleSetupForm;
