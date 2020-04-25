import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const StyledContainer = styled.div`
  border: 3px ${Colour.getHex('white')} solid;
  display: flex;
  width: 60%;
  margin: 10rem auto;
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: ${Colour.getRgba('white', 0.1)};
`;

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }: IProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
