import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import { ProfilePage } from "./layaut/main/profilePage/ProfilePage";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Profile } from "./layaut/main/profilePage/profile/Profile";
import { Dialogs } from "./layaut/main/dialogs/Dialogs";
import { News } from "./layaut/main/news/News";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Aside />
        <Main>
            <Route path={"/profile"} render={()=><ProfilePage/>}/>
            <Route path={"/messages"} render={()=><Dialogs/>}/>
            <Route path={"/news"} render={()=><News/>}/>
        </Main>
      </StyledApp>
    </BrowserRouter>
  );
}

const Main = styled.main`
    background-color: ${Theme.colors.primary};
    grid-area: m;
`

export default App;
