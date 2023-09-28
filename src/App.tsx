import React from 'react';
import './App.css';
import { Header } from './layaut/header/Header';
import { Aside } from './layaut/aside/Aside';
import { Main } from './layaut/main/Profile';
import { StyledApp } from './styles/StyledApp';

function App() {
  return (
    <StyledApp>
      <Header/>
      <Aside/>
      <Main/>
    </StyledApp>
  );
}

export default App;
