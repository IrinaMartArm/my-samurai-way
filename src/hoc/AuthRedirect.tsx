import React from "react";
import {connect} from "react-redux";

let stateToProps = () => ({
    isAuth: state.isAuth
})

export const WithAuthRedirect = (Component) => {
    class Redirect extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
             return <Component {...this.props}/>
        }
    }
    return connect(stateToProps)(Redirect)
}