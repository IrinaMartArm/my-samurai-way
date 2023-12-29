import React from "react";
import "./App.css";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { Route } from "react-router-dom";
import { News } from "./layaut/main/news/News";
import a from "./assets/images/IMG_3719 1 2.png";
import UsersContainer from "./layaut/main/users/UsersContainer";
import ProfilePageContainer from "./layaut/main/profilePage/ProfilePageContainer";
import {HeaderContainer} from "./layaut/header/HeaderContainer";
import DialogsContainer from "./layaut/main/dialogs/DialogsContainer";
import Login from "./layaut/Login/Login";


const App: React.FC = () => {


    return (
        <StyledApp>
            <HeaderContainer/>
            <Aside />
            <Main>
                <Box>
                    <img src={a} alt="" />
                </Box>
                <Route
                    path={"/profile/:userId"}
                    render={() => <ProfilePageContainer/>}
                />
                <Route
                    path={"/dialogs"}
                    render={() => <DialogsContainer/>}
                />
                <Route path={"/users"} render={() =>
                    <UsersContainer/>} />
                <Route path={"/login"} render={() => <Login/>} />
                <Route path={"/news"} render={() => <News/>} />
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


