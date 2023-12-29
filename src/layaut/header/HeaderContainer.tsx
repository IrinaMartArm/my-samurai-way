import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authTC} from "../Login/AuthReducer";
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
    login: state.authReducer.login
})
const mapDispatchToProps: MapDispatchToProps = {authTC}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)




type MapStateToProps = {
    isAuth: boolean
    login: string
}

type MapDispatchToProps = {
    authTC: () => void
}

type PropsType = MapStateToProps & MapDispatchToProps