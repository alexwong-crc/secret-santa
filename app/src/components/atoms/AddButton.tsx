import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ColourTheme from '@/styles/ColourTheme';
import { Text } from '@/atoms';

const Colour = new ColourTheme();

const AddButtonSC = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  align-self: flex-start;
  > * + * {
    margin-left: 0.5rem;
  }
  :hover {
    cursor: pointer;
  }
`;

interface IProps {
  onClick: () => void;
}

const AddButton: React.FC<IProps> = ({ onClick }: IProps) => {
  return (
    <AddButtonSC type="button" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} size="2x" color={Colour.getHex('action')} />
      <Text color={Colour.getHex('action')}>Add person</Text>
    </AddButtonSC>
  );
};

export default AddButton;
