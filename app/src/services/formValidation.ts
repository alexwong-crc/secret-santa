import { useFormikContext, FormikProps } from 'formik';
import { FormikValuesKey, IFormikValues } from '@/types/form';

export const areFieldsValid = (keys: FormikValuesKey[]): boolean => {
  const { values, errors }: FormikProps<IFormikValues> = useFormikContext();
  return keys.every((key) => {
    if (errors[key] || !values[key]) {
      return false;
    }
    return true;
  });
};
