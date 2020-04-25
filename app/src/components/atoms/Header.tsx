import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  children: React.ReactNode;
}

const StyledHeader = styled.h1`
  font-family: 'Satisfy', serif;
  color: ${Colour.getHex('white')};
`;

const Header: React.FC<IProps> = ({ children }: IProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
