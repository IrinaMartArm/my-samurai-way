import React from "react";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {getProfileTC, UserProfile} from "../../../redux/ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



class ProfilePageClassContainer extends React.Component<ProfilePagePropsType & RouteComponentProps<{userId: string}>> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfileTC(+userId)
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <ProfilePage {...this.props} profile={this.props.profile}/>
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
})
const MapDispatchToProps: MapDispatchToPropsType = {getProfileTC}

export type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType

const RouterBox = withRouter(ProfilePageClassContainer)

export const ProfilePageContainer= connect(MapStateToProps, MapDispatchToProps)(RouterBox)




type MapStateToPropsType = {
    profile: UserProfile
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getProfileTC: (userId: number) => void
}
