import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { IFormikPerson } from '@/types/form';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const ContainerSC = styled.div`
  position: relative;
  display: flex;
  > svg {
    :hover + div {
      display: block;
    }
  }
`;
const HoverSC = styled.div`
  position: absolute;
  background-color: ${Colour.getRgba('error', 0.8)};
  font-size: 0.8rem;
  color: ${Colour.getHex('white')};
  padding: 0.25rem;
  bottom: 100%;
  left: 50%;
  display: none;
  min-width: 8rem;
  text-align: center;
  transform: translate(-50%, -75%);
  border-radius: 0.3rem;
  ::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: none;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid ${Colour.getRgba('error', 0.8)};
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface IProps {
  children?: React.ReactNode;
}

const IconValidation: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <ContainerSC>
      <FontAwesomeIcon icon={faExclamationTriangle} color={Colour.getHex('error')} />
      <HoverSC>{children}</HoverSC>
    </ContainerSC>
  );
};

export default IconValidation;
