import React from "react";
import {Header} from "./Header";
import {AuthDataType, instance, ResponseType} from "../../api/Api";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/AuthReducer";
import {RootStateType} from "../../redux/Store";


class HeaderContainerClass extends React.Component<PropsType>{

    componentDidMount() {
        instance.get<ResponseType>('auth/me')
            .then((res) => {
                if(res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateType): MapStateToProps => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})
const mapDispatchToProps: MapDispatchToProps = {setAuthUserData}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)




type MapStateToProps = {
    isAuth: boolean
    login: string
}

type MapDispatchToProps = {
    setAuthUserData: (data: AuthDataType) => void
}

type PropsType = MapStateToProps & MapDispatchToProps