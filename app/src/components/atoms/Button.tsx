import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IButtonSC {
  outline: boolean;
}

const ButtonSC = styled.button<IButtonSC>`
  background-color: ${({ outline }): string => (outline ? 'transparent' : Colour.getHex('action'))};
  color: ${({ outline }): string => (outline ? Colour.getHex('action') : Colour.getHex('white'))};
  border: 2px solid ${Colour.getHex('action')};
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  align-self: flex-end;
  outline: none;
  :hover {
    cursor: pointer;
  }
`;

interface IProps extends Partial<IButtonSC> {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
}

const SubmitButton: React.FC<IProps> = ({ type, children, onClick, outline = false }: IProps) => {
  return (
    <ButtonSC type={type} onClick={onClick} outline={outline}>
      {children}
    </ButtonSC>
  );
};

export default SubmitButton;
