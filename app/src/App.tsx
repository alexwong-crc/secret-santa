import React from 'react';
import { Container } from '@/components/atoms';
import GlobalStyle from '@/styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>Welcome to secret santa app</Container>
  </>
);

export default App;
