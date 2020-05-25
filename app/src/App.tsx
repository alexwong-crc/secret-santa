import React, { useState } from 'react';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import { IFormikValues } from '@/types/form';
import { Header } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';
import { validationSchema, initialValues } from '@/services/formValidation';
import { scheduleAPI } from '@/api/schedule';

const App: React.FC = () => {
  const [formProcess, setFormProcess] = useState('create');

  const submitForm = async (values: IFormikValues, actions: FormikHelpers<IFormikValues>): Promise<void> => {
    if (values.partyDate) {
      const request = {
        ...values,
        partyDate: values.partyDate,
      };
      try {
        await scheduleAPI(request);
        actions.resetForm();
        setFormProcess('delivering');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header underline={true} margin="3rem auto 1rem">
        Secret Santa
      </Header>
      {formProcess === 'create' ? (
        <Formik onSubmit={submitForm} initialValues={initialValues} validationSchema={validationSchema}>
          {(formikProps: FormikProps<IFormikValues>): React.ReactElement => <Form formik={formikProps} />}
        </Formik>
      ) : null}
    </>
  );
};

export default App;
