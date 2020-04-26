import React from 'react';
import { Container, Header } from '@/components/atoms';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header>Secret Santa</Header>
    </Container>
  </>
);

export default App;
