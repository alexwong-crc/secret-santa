import React from 'react';
import styled from 'styled-components';
import ColourTheme from '@/styles/ColourTheme';

const Colour = new ColourTheme();

const SubmitButtonSC = styled.button`
  background-color: ${Colour.getHex('action')};
  color: ${Colour.getHex('white')};
  border: 2px solid ${Colour.getHex('action')};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  align-self: flex-end;
  :hover {
    cursor: pointer;
  }
`;

const SubmitButton: React.FC = () => {
  return <SubmitButtonSC type="submit">Create Party</SubmitButtonSC>;
};

export default SubmitButton;
