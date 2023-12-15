import React from "react";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {setUserProfile, UserProfile} from "../../../redux/ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {withRouter} from "react-router-dom";
import {instance} from "../../../api/Api";

class ProfilePageClassContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        instance.get(`profile/${userId}`)
            .then((res)=> {
                this.props.setUserProfile(res.data)
            })
    }
    render() {
        return <ProfilePage {...this.props} profile={this.props.profile}/>
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
})
const MapDispatchToProps: MapDispatchToPropsType = {setUserProfile}


const RouterBox = withRouter(ProfilePageClassContainer)
export const ProfilePageContainer= connect(MapStateToProps, MapDispatchToProps)(RouterBox)




type MapStateToPropsType = {
    profile: UserProfile
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfile) => void
}
type propsType = MapStateToPropsType & MapDispatchToPropsType