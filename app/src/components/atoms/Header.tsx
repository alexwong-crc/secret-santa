import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';
import { PaletteKeys } from '@/types/styles';
import Divider from './Divider';

const Colour = new ColourTheme();

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IHeaderSC {
  level: Headers;
  colour: PaletteKeys;
}

interface IHeaderWrapperSC {
  centre: boolean;
  margin?: string;
}

const HeaderWrapperSC = styled.div<IHeaderWrapperSC>`
  display: flex;
  justify-content: center;
  margin: ${({ centre, margin }): string => (margin ? margin : centre ? '0 auto 1rem' : '0 0 1rem')};
`;

const HeaderSC = styled.h1<IHeaderSC>`
  font-family: 'Satisfy', serif;
  display: inline-block;
  margin: 0;
  color: ${({ colour }): string => Colour.getHex(colour)};
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

interface IProps extends Partial<IHeaderSC & IHeaderWrapperSC> {
  children: React.ReactNode;
  underline?: boolean;
}

const Header: React.FC<IProps> = ({
  children,
  level = 'h1',
  centre = false,
  colour = 'white',
  margin,
  underline = false,
}: IProps) => {
  return (
    <HeaderWrapperSC centre={centre} margin={margin}>
      <HeaderSC as={level} level={level} colour={colour}>
        {children}
        <Divider underline={underline} />
      </HeaderSC>
    </HeaderWrapperSC>
  );
};

export default Header;
