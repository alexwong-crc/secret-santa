import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '@/src/App';
import { FieldArray, FieldArrayRenderProps, useFormikContext, FormikProps } from 'formik';
import { FormPage, Button, Grid, AddButton } from '@/atoms';
import { FormHeaders, Person } from '@/molecules';
import { FormikPages, IFormikValues } from '@/types/form';
import { uuid } from 'uuidv4';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const ContainerSC = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  > * + * {
    margin-left: 1rem;
  }
  span {
    color: ${Colour.getHex('error')};
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
    if (arrayHelper.form.values.people.length > 3) {
      arrayHelper.remove(index);
    }
  };
  const appContext = useContext(AppContext);

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
      <ContainerSC>
        <span>{appContext.error}</span>
      </ContainerSC>
      <ContainerSC>
        <Button type="button" onClick={previousPage} ghost>
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
