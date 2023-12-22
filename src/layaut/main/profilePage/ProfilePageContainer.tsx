import React, {ComponentType} from "react";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {changeStatusTC, getProfileTC, getUserStatusTC, UserProfile} from "../../../redux/ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";



class ProfilePageContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId)(userId = String(2))
        this.props.getProfileTC(+userId)
        this.props.getUserStatusTC(+userId)
    }
    render() {
        return <ProfilePage {...this.props}
                            profile={this.props.profile}
                            status={this.props.status}
                            changeStatus={this.props.changeStatusTC}
        />
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
})
const MapDispatchToProps: MapDispatchToPropsType = {getProfileTC, getUserStatusTC, changeStatusTC}

export default compose<ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfilePageContainer)




type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = ProfilePagePropsType & RouteComponentProps<{userId: string}>

type MapStateToPropsType = {
    profile: UserProfile
    status: string
}


type MapDispatchToPropsType = {
    getProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    changeStatusTC: (status: string) => void
}
