import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { DisplayLabel, Input } from './components';

function App() {
  const [nome, setNome] = useState('');
  return (
    <>
      <GlobalStyle />
      <h1>Age calculator app</h1>
      <DisplayLabel label="years" value={22} />
      <DisplayLabel label="months" />
      <Input
        name="nome"
        label="Nome"
        type="text"
        value={nome}
        placeholder="Nome"
        isValid={true}
        errorMessage="Must be a valid day"
        handleChange={(e) => setNome(e)}
      />
    </>
  );
}

export default App;
