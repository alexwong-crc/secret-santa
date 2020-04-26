import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IStyledHeader {
  centre: boolean;
  level: Headers;
}

const StyledHeader = styled.h1<IStyledHeader>`
  font-family: 'Satisfy', serif;
  margin: ${({ centre }): string => (centre ? '0 auto 1rem' : '0 0 1rem')};
  color: ${Colour.getHex('white')};
  font-size: ${({ level }): string => {
    switch (level) {
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

interface IProps {
  children: React.ReactNode;
  level?: Headers;
  centre?: boolean;
}

const Header: React.FC<IProps> = ({ children, level = 'h1', centre = false }: IProps) => {
  return (
    <StyledHeader as={level} level={level} centre={centre}>
      {children}
    </StyledHeader>
  );
};

export default Header;
