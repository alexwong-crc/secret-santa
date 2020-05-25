import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IButtonSC {
  ghost: boolean;
}

const ButtonSC = styled.button<IButtonSC>`
  background-color: ${({ ghost }): string => (ghost ? 'transparent' : Colour.getHex('action'))};
  color: ${({ ghost }): string => (ghost ? Colour.getHex('action') : Colour.getHex('white'))};
  border: ${({ ghost }): string => (ghost ? 'none' : `2px solid ${Colour.getHex('action')}`)};
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  align-self: flex-end;
  outline: none;
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

interface IProps extends Partial<IButtonSC> {
  children: React.ReactNode;
  type: 'submit' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

const SubmitButton: React.FC<IProps> = ({ type, children, onClick, ghost = false, disabled = false }: IProps) => {
  return (
    <ButtonSC type={type} onClick={onClick} ghost={ghost} disabled={disabled}>
      {children}
    </ButtonSC>
  );
};

export default SubmitButton;
