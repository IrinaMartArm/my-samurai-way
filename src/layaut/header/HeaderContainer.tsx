import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {LogoutTC} from "../Login/AuthReducer";
import {RootStateType} from "../../redux/Store";


class HeaderContainerClass extends React.Component<PropsType>{

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToProps => ({
    isAuth: state.authReducer.isAuth,
    password: state.authReducer.password
})
const mapDispatchToProps: MapDispatchToProps = {LogoutTC}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)




type MapStateToProps = {
    isAuth: boolean
    password: string | null
}

type MapDispatchToProps = {
    LogoutTC: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps