import React, { useState } from 'react';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import { IFormikValues } from '@/types/form';
import { Header, Logo } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';
import { validationSchema, initialValues } from '@/services/formValidation';
import { scheduleAPI } from '@/api/schedule';

export const AppContext = React.createContext({
  error: '',
});

const App: React.FC = () => {
  const [formProcess, setFormProcess] = useState('create');
  const [errorContext, setErrorContext] = useState('');

  const submitForm = async (values: IFormikValues, actions: FormikHelpers<IFormikValues>): Promise<void> => {
    if (values.partyDate) {
      const request = {
        ...values,
        people: values.people.map(({ uuid, ...other }) => ({ ...other })),
        partyDate: values.partyDate,
      };
      try {
        await scheduleAPI(request);
        actions.resetForm();
        setErrorContext('');
        setFormProcess('delivering');
      } catch (error) {
        setErrorContext('An error occurred when sending the emails, please try again.');
      }
    }
  };

  return (
    <AppContext.Provider value={{ error: errorContext }}>
      <GlobalStyle />
      {formProcess === 'create' ? (
        <Formik onSubmit={submitForm} initialValues={initialValues} validationSchema={validationSchema}>
          {(formikProps: FormikProps<IFormikValues>): React.ReactElement => <Form formik={formikProps} />}
        </Formik>
      ) : null}
      <Logo />
    </AppContext.Provider>
  );
};

export default App;
