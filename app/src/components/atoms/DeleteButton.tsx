import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const ButtonSC = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

interface IProps {
  onClick: () => void;
}

const DeleteButton: React.FC<IProps> = ({ onClick }: IProps) => {
  return (
    <ButtonSC type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashAlt} color={Colour.getHex('error')} size="2x" />
    </ButtonSC>
  );
};

export default DeleteButton;
