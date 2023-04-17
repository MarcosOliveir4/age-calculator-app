import React from 'react';
import { GlobalStyle } from './styles/global';
import { DisplayLabel } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Age calculator app</h1>
      <DisplayLabel label="years" value={22} />
      <DisplayLabel label="months" />
    </>
  );
}

export default App;
