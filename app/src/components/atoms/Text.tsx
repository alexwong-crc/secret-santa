import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

interface ITextSC {
  color?: string;
  fontSize?: string;
  margin?: string;
}

const TextSC = styled.span<ITextSC>`
  color: ${({ color }): string => color ?? Colour.getHex('white')};
  margin: ${({ margin }): string => margin ?? '0'};
  font-size: ${({ fontSize }): string => fontSize ?? '1rem'};
`;

interface IProps extends ITextSC {
  children: React.ReactNode;
}

const Text: React.FC<IProps> = ({ children, color, margin }: IProps) => {
  return (
    <TextSC color={color} margin={margin}>
      {children}
    </TextSC>
  );
};

export default Text;
