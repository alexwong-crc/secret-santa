import React, { useState } from 'react';
import { Container, Header, Title } from '@/atoms';
import { Form as FormikForm, FormikProps } from 'formik';
import { IFormikValues, FormikPages } from '@/types/form';
import { formatDate } from '@/services/format';
import { PartySetupForm, PeopleSetupForm } from '@/molecules';

interface IForm {
  formik: FormikProps<IFormikValues>;
}

const Form: React.FC<IForm> = ({ formik }: IForm) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageOrder: FormikPages[] = ['partySetup', 'peopleSetup'];
  const { values } = formik;

  const nextPage = (): void => setPageIndex(pageIndex + 1);

  const previousPage = (): void => setPageIndex(pageIndex - 1);

  const getPartyName = (): string => (pageIndex === 1 ? values.partyName : ' ');

  const getPartyDate = (): string => (values.partyDate && pageIndex === 1 ? formatDate(values.partyDate) : ' ');

  return (
    <>
      <Title title={getPartyName()} subtitle={getPartyDate()} />
      <Container>
        <FormikForm>
          <PartySetupForm currentPage={pageOrder[pageIndex]} nextPage={nextPage} />
          <PeopleSetupForm currentPage={pageOrder[pageIndex]} nextPage={nextPage} previousPage={previousPage} />
        </FormikForm>
      </Container>
    </>
  );
};

export default Form;
