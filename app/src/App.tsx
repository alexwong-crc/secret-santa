import React from 'react';
import { Formik, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { Container, Header, Divider } from '@/atoms';
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
};

const ValidationSchema = Yup.object().shape({
  people: Yup.array()
    .ensure()
    .of(
      Yup.object().shape({
        uuid: Yup.string().required(),
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
      }),
    ),
});

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header centre>Secret Santa</Header>
      <Divider />
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
