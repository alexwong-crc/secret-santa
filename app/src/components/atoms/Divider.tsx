import React from 'react';
import styled from 'styled-components';

interface IDividerSC {
  underline: boolean;
}

const DividerSC = styled.hr<IDividerSC>`
  width: 60%;
  margin: 0 auto 2rem;
  display: ${({ underline }): string => (underline ? 'block' : 'none')};
`;

const Divider: React.FC<IDividerSC> = ({ underline }: IDividerSC) => {
  return <DividerSC underline={underline} />;
};

export default Divider;
