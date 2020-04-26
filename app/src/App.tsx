import React from 'react';
import { Formik, FormikProps } from 'formik';
import { IFormik } from '@/types/form';
import { Container, Header, Divider } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header centre>Secret Santa</Header>
      <Divider />
      <Formik
        onSubmit={(values: IFormik): void => console.log(values)}
        initialValues={{}}
        render={(formikProps: FormikProps<IFormik>) => <Form formik={formikProps} />}
      />
    </Container>
  </>
);

export default App;
