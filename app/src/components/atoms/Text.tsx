import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface ITextSC {
  color?: string;
  fontSize?: string;
  margin?: string;
  fontFamily?: string;
}

const TextSC = styled.span<ITextSC>`
  color: ${({ color }): string => color ?? Colour.getHex('white')};
  margin: ${({ margin }): string => margin ?? '0'};
  font-size: ${({ fontSize }): string => fontSize ?? '1rem'};
  font-family: ${({ fontFamily }): string => fontFamily ?? 'inherit'};
`;

interface IProps extends ITextSC {
  children: React.ReactNode;
}

const Text: React.FC<IProps> = ({ children, color, margin, fontSize, fontFamily }: IProps) => {
  return (
    <TextSC color={color} margin={margin} fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </TextSC>
  );
};

export default Text;
