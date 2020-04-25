import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px black solid;
  display: flex;
  width: 60%;
  margin: 10rem auto;
  padding: 3rem;
  border-radius: 0.5rem;
`;

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }: IProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
