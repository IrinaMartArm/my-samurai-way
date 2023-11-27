import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import { ProfilePage } from "./layaut/main/profilePage/ProfilePage";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { Route } from "react-router-dom";
import { News } from "./layaut/main/news/News";
import a from "./assets/images/IMG_3719 1 2.png";
import {DialogsContainer} from "./layaut/main/dialogs/DialogsContainer";
import {UsersContainer} from "./layaut/main/users/UsersContainer";


const App: React.FC = () => {


    return (
        <StyledApp>
            <Header />
            <Aside />
            <Main>
                <Box>
                    <img src={a} alt="" />
                </Box>
                <Route
                    path={"/profile"}
                    render={() => <ProfilePage/>}
                />
                <Route
                    path={"/dialogs"}
                    render={() => <DialogsContainer/>}
                />
                <Route path={"/users"} render={() => <UsersContainer/>} />
                <Route path={"/news"} render={() => <News />} />
            </Main>
        </StyledApp>
    );
}

const Main = styled.main`
    background-color: ${Theme.colors.primary};
    grid-area: m;
`;
const Box = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
`;

export default App;
