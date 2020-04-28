import React from 'react';
import { Formik, FormikProps } from 'formik';
import { IFormikValues } from '@/types/form';
import { Container, Header, Divider } from '@/atoms';
import { Form } from '@/organisms';
import GlobalStyle from '@/styles/GlobalStyle';
import { uuid } from 'uuidv4';

const initialValues: IFormikValues = {
  people: [
    {
      name: '',
      email: '',
      uuid: uuid(),
    },
  ],
};

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header centre>Secret Santa</Header>
      <Divider />
      <Formik onSubmit={(values: IFormikValues): void => console.log(values)} initialValues={initialValues}>
        {(formikProps: FormikProps<IFormikValues>): React.ReactElement => <Form formik={formikProps} />}
      </Formik>
    </Container>
  </>
);

export default App;
