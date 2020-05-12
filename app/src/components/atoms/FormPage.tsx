import React from 'react';
import styled from 'styled-components';

interface IFormPageSC {
  hidden: boolean;
}

const FormPageSC = styled.div<IFormPageSC>`
  display: ${({ hidden }): string => (hidden ? 'none' : 'flex')};
  flex-flow: column;
`;

interface IProps {
  children: React.ReactNode;
  id: string;
  currentPage: string;
}

const FormPage: React.FC<IProps> = ({ children, id, currentPage }: IProps) => {
  const hidePage = (name: string, page: string): boolean => (name !== page ? true : false);

  return <FormPageSC hidden={hidePage(id, currentPage)}>{children}</FormPageSC>;
};

export default FormPage;
