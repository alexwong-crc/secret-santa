import React from 'react';
import { Formik, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { Container, Header } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';
import { uuid } from 'uuidv4';
import * as Yup from 'yup';

const initialValues: IFormikValues = {
  people: [
    {
      name: '',
      email: '',
      uuid: uuid(),
    },
  ],
  partyName: '',
  partyOwner: '',
  partyDate: '',
};

const ValidationSchema = Yup.object().shape({
  people: Yup.array()
    .ensure()
    .of(
      Yup.object().shape({
        uuid: Yup.string().required(),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
      }),
    ),
  partyName: Yup.string().required(),
  partyOwner: Yup.string().required(),
  partyDate: Yup.date().required(),
});

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header underline={true} margin="3rem auto 1rem">
      Secret Santa
    </Header>
    <Container>
      <Formik
        onSubmit={(values: IFormikValues): void => console.log(values)}
        initialValues={initialValues}
        validationSchema={ValidationSchema}
      >
        {(formikProps: FormikProps<IFormikValues>): React.ReactElement => <Form formik={formikProps} />}
      </Formik>
    </Container>
  </>
);

export default App;
