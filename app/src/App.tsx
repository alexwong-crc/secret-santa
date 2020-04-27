import React from 'react';
import { Formik, FormikProps } from 'formik';
import { IFormik } from '@/types/form';
import { Container, Header, Divider } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';
import { uuid } from 'uuidv4';

const initialValues: IFormik = { [uuid()]: { name: '', email: '' } };

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header centre>Secret Santa</Header>
      <Divider />
      <Formik onSubmit={(values: IFormik): void => console.log(values)} initialValues={initialValues}>
        {(formikProps: FormikProps<IFormik>): React.ReactElement => <Form formik={formikProps} />}
      </Formik>
    </Container>
  </>
);

export default App;
