import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";

import { StyledApp } from "./styles/StyledApp";
import { Main } from "./layaut/main/Main";

function App() {
  return (
    <StyledApp>
      <Header />
      <Aside />
      <Main/>
    </StyledApp>
  );
}

export default App;
