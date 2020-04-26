import React from 'react';
import { Container, Header, Divider } from '@/atoms';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header centre>Secret Santa</Header>
      <Divider />
    </Container>
  </>
);

export default App;
