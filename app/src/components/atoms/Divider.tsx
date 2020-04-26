import React from 'react';
import styled from 'styled-components';

const DividerSC = styled.hr`
  width: 60%;
  margin: 0 auto 2rem;
`;

const Divider: React.FC = () => {
  return <DividerSC />;
};

export default Divider;
