import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const LogoSC = styled.div`
  color: ${Colour.getHex('white')};
  font-family: 'Satisfy', serif;
  font-size: 2.3rem;
  line-height: 2.3rem;
`;

const DomainSC = styled.div`
  color: ${Colour.getHex('action')};
  font-family: 'Satisfy', serif;
  font-size: 1rem;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  right: 0px;
  bottom: 0px;
  padding: 1rem 2rem;
  user-select: none;
`;

const Logo = () => {
  return (
    <Container>
      <LogoSC>Secret Santa</LogoSC>
      <DomainSC>alexhomingwong.co.uk</DomainSC>
    </Container>
  );
};

export default Logo;
