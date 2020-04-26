import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface IProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const StyledHeader = styled.h1`
  font-family: 'Satisfy', serif;
  margin: 0 0 1rem;
  color: ${Colour.getHex('white')};
  font-size: ${({ as }: { as: string }): string => {
    switch (as) {
      case 'h1':
        return '4rem';
      case 'h2':
        return '3rem';
      case 'h3':
        return '3.5rem';
      case 'h4':
        return '2rem';
      case 'h5':
        return '1.8rem';
      case 'h6':
        return '1.5rem';
      default:
        return '4rem';
    }
  }};
`;

const Header: React.FC<IProps> = ({ children, level = 'h1' }: IProps) => {
  return <StyledHeader as={level}>{children}</StyledHeader>;
};

export default Header;
