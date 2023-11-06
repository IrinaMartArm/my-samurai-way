import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import { ProfilePage } from "./layaut/main/profilePage/ProfilePage";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter, Route } from "react-router-dom";
import { Dialogs } from "./layaut/main/dialogs/Dialogs";
import { News } from "./layaut/main/news/News";
import {state, StateType} from "./state";
import a from "./assets/images/IMG_3719 1 2.png";

type PropsType = {
    state: StateType
    addPost: (post: string) => void
}


function App(props: PropsType) {

    return (
        <BrowserRouter>
        <StyledApp>
            <Header />
            <Aside />
            <Main>
                <Box>
                    <img src={a} alt="" />
                </Box>
            <Route
                path={"/profile"}
                render={() => <ProfilePage posts={state.posts} addPost={props.addPost}/>}
            />
            {/* <Route path={"/dialogs"} component={ <Dialogs contacts={contacts}/>} /> */}
            <Route
                path={"/dialogs"}
                render={() => <Dialogs contacts={state.contacts} />}
            />
            <Route path={"/news"} render={() => <News />} />
            </Main>
        </StyledApp>
        </BrowserRouter>
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
