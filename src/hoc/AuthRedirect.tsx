import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {RootStateType} from "../redux/Store";
import {Redirect} from "react-router-dom";

const stateToProps = (state: RootStateType): StateToPropsType => ({
    isAuth: state.authReducer.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: StateToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(stateToProps)(RedirectComponent)
}

type StateToPropsType = {
    isAuth: boolean
}
