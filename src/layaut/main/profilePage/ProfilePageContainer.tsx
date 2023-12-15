import React from "react";
import {ProfilePage} from "./ProfilePage";
import {instance} from "../users/UsersContainer";
import {connect} from "react-redux";
import {setUserProfile, UserProfile} from "../../../redux/ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {withRouter} from "react-router-dom";

class ProfilePageClassContainer extends React.Component<any, any>{
    componentDidMount() {
        instance.get(`profile/2`)
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


const RouterBox = withRouter(ProfilePageClassContainer)
export const ProfilePageContainer = connect(MapStateToProps, {setUserProfile})(RouterBox)

type MapStateToPropsType = {
    profile: UserProfile
}
