import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const TitleSC = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 1.5rem 0 0;
  h1 {
    margin: 0;
    color: ${Colour.getHex('highlight')};
    font-family: 'Satisfy', serif;
    font-size: 2.5rem;
    white-space: pre;
  }
  h3 {
    margin: 0 auto 1rem;
    color: ${Colour.getHex('white')};
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    white-space: pre;
  }
`;

interface IProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<IProps> = ({ title, subtitle }: IProps) => (
  <TitleSC>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </TitleSC>
);

export default Title;
