import React from 'react';
import styled from 'styled-components';

const GridSC = styled.div`
  display: grid;
  grid-template-columns: [number] 1rem [name] 1fr [email] 2fr [validation] 1rem [delete] 1rem;
  grid-template-rows: auto;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 1rem 0;
`;

interface IProps {
  children: React.ReactNode;
}

const Grid: React.FC<IProps> = ({ children }: IProps) => {
  return <GridSC>{children}</GridSC>;
};

export default Grid;
