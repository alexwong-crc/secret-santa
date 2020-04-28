import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IFormikPerson } from '@/types/form';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  errors?: Partial<IFormikPerson> | string;
  touched?: Partial<Record<keyof IFormikPerson, boolean>>;
}

const IconValidation: React.FC<IProps> = ({ errors, touched }: IProps) => {
  if (typeof errors === 'string') {
    return <FontAwesomeIcon icon={faExclamationTriangle} color={Colour.getHex('error')} />;
  } else if (touched) {
    if (!errors) return <FontAwesomeIcon icon={faCheckCircle} color={Colour.getHex('highlight')} />;

    let isTouched = false;
    const keys = Object.keys(errors) as (keyof IFormikPerson)[];
    keys.forEach((key) => {
      if (touched[key] === true && errors?.[key]) {
        isTouched = true;
      }
    });
    if (isTouched) return <FontAwesomeIcon icon={faExclamationTriangle} color={Colour.getHex('error')} />;
  }
  return null;
};

export default IconValidation;
