import React from 'react';
import styled from 'styled-components';

interface ICellSC {
  column: string;
}

const CellSC = styled.div<ICellSC>`
  grid-column: ${({ column }): string => `${column} / span 1`};
`;

interface IProps extends ICellSC {
  children: React.ReactNode;
}

const Cell: React.FC<IProps> = ({ children, column }: IProps) => {
  return <CellSC column={column}>{children}</CellSC>;
};

export default Cell;
