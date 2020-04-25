import React from 'react';
import { Container, Header } from '@/components/atoms';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header>Welcome to secret santa app</Header>
    </Container>
  </>
);

export default App;
