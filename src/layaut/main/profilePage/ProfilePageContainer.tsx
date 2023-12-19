import React from "react";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {getProfileTC, UserProfile} from "../../../redux/ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";



class ProfilePageClassContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfileTC(+userId)
    }
    render() {
        return <ProfilePage {...this.props} profile={this.props.profile}/>
    }
}

// let RedirectComponent = WithAuthRedirect(ProfilePageClassContainer)

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
})
const MapDispatchToProps: MapDispatchToPropsType = {getProfileTC}

const WithRouterContainer = withRouter(ProfilePageClassContainer)

export const ProfilePageContainer= WithAuthRedirect(connect(MapStateToProps, MapDispatchToProps)(WithRouterContainer))




type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = ProfilePagePropsType & RouteComponentProps<{userId: string}>

type MapStateToPropsType = {
    profile: UserProfile
}


type MapDispatchToPropsType = {
    getProfileTC: (userId: number) => void
}
