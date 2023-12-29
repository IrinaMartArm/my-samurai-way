import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC, LogoutTC} from "../Login/AuthReducer";
import {RootStateType} from "../../redux/Store";


class HeaderContainerClass extends React.Component<PropsType>{

    componentDidMount() {
        this.props.authTC()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToProps => ({
    isAuth: state.authReducer.isAuth,
    password: state.authReducer.password
})
const mapDispatchToProps: MapDispatchToProps = {authTC, LogoutTC}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)




type MapStateToProps = {
    isAuth: boolean
    password: string | null
}

type MapDispatchToProps = {
    authTC: () => void
    LogoutTC: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps