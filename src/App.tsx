import React from "react";
import "./App.css";
import { Header } from "./layaut/header/Header";
import { Aside } from "./layaut/aside/Aside";
import { StyledApp } from "./styles/StyledApp";
import { ProfilePage } from "./layaut/main/profilePage/ProfilePage";
import styled from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./layaut/main/news/News";
import a from "./assets/images/IMG_3719 1 2.png";
import { StoreAppType} from "./redux/Store";
import {DialogsContainer} from "./layaut/main/dialogs/DialogsContainer";

type PropsType = {
    store: StoreAppType
}


const App: React.FC<PropsType> = (props: PropsType) => {

    const {store}= props

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
                render={() =>
                    <ProfilePage  store={store}
                                 dispatch={store.dispatch.bind(store)}
                    />}
            />
            <Route
                path={"/dialogs"}
                render={() => <DialogsContainer store={store}
                />}
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
