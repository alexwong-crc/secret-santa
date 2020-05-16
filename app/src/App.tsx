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
  partyDate: null,
};

const ValidationSchema = Yup.object().shape({
  people: Yup.array()
    .ensure()
    .of(
      Yup.object().shape({
        uuid: Yup.string().required(),
        name: Yup.string().required('A name is required'),
        email: Yup.string().email('Invalid email').required('A email is required'),
      }),
    ),
  partyName: Yup.string().required('A party name is required'),
  partyOwner: Yup.string().required('Specify a party owner'),
  partyDate: Yup.date().required('Enter a due date for the party').typeError('Enter a due date for the party'),
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
