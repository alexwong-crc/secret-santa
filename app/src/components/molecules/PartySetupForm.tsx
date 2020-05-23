import React from 'react';
import { Field } from 'formik';
import { areFieldsValid } from '@/services/formValidation';
import { Input, FormPage, Button, DateInput } from '@/atoms';
import { FormikPages } from '@/types/form';

interface IPartySetupForm {
  currentPage: FormikPages;
  nextPage: () => void;
}

const PartySetupForm: React.FC<IPartySetupForm> = ({ currentPage, nextPage }: IPartySetupForm) => {
  return (
    <FormPage id="partySetup" currentPage={currentPage}>
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
  );
};

export default PartySetupForm;
