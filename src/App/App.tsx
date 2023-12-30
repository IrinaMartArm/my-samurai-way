import React from "react";
import "./App.css";
import {Aside} from "../layaut/aside/Aside";
import {StyledApp} from "../styles/StyledApp";
import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {Route} from "react-router-dom";
import {News} from "../layaut/main/news/News";
import a from "../assets/images/IMG_3719 1 2.png";
import UsersContainer from "../layaut/main/users/UsersContainer";
import ProfilePageContainer from "../layaut/main/profilePage/ProfilePageContainer";
import {HeaderContainer} from "../layaut/header/HeaderContainer";
import DialogsContainer from "../layaut/main/dialogs/DialogsContainer";
import Login from "../layaut/Login/Login";
import {connect} from "react-redux";
import {IsInitializedApp} from "./AppReducer";
import {RootStateType} from "../redux/Store";
import {Preloader} from "../components/Preloader";


class App extends React.Component<PropsType>{
    componentDidMount() {
        this.props.IsInitializedApp()
        console.log(this.props.isInitialized)
    }

    render() {
        if(!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <StyledApp>
                <HeaderContainer/>
                <Aside/>
                <Main>
                    <Box>
                        <img src={a} alt=""/>
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
                        <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                </Main>
            </StyledApp>
        );
    }
}
const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    isInitialized: state.appReducer.isInitialized
})
const mapDispatchToProps: MapDispatchToProps = {IsInitializedApp}
export default connect(mapStateToProps, mapDispatchToProps)(App)

type mapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToProps = {
    IsInitializedApp: () => void
}
type PropsType = mapStateToPropsType & MapDispatchToProps



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




