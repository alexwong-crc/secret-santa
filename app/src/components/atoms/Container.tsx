import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const ContainerSC = styled.div`
  border: 2px ${Colour.getHex('white')} solid;
  display: flex;
  flex-flow: column;
  width: 55%;
  margin: 0 auto 5rem;
  padding: 2.5rem 3rem;
  border-radius: 0.5rem;
  background-color: ${Colour.getRgba('white', 0.1)};
`;

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }: IProps) => {
  return <ContainerSC>{children}</ContainerSC>;
};

export default Container;
