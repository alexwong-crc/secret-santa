import * as Yup from 'yup';
import { uuid } from 'uuidv4';
import { useFormikContext, FormikProps } from 'formik';
import { FormikValuesKey, IFormikValues } from '@/types/form';

export const initialValues: IFormikValues = {
  people: [
    {
      name: '',
      email: '',
      uuid: uuid(),
    },
    {
      name: '',
      email: '',
      uuid: uuid(),
    },
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

export const validationSchema = Yup.object().shape({
  people: Yup.array()
    .ensure()
    .of(
      Yup.object().shape({
        uuid: Yup.string().required(),
        name: Yup.string().required('A name is required'),
        email: Yup.string().email('Invalid email').required('A email is required'),
      }),
    )
    .min(3, 'At least 3 people needed for a party'),
  partyName: Yup.string().required('A party name is required'),
  partyOwner: Yup.string().required('Specify a party owner'),
  partyDate: Yup.date().required('Enter a due date for the party').typeError('Enter a due date for the party'),
});

export const areFieldsValid = (keys: FormikValuesKey[]): boolean => {
  const { values, errors }: FormikProps<IFormikValues> = useFormikContext();
  return keys.every((key) => {
    if (errors[key] || !values[key]) {
      return false;
    }
    return true;
  });
};
