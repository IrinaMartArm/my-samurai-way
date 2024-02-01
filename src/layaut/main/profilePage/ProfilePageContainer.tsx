import React, {ComponentType} from "react";
import {ProfilePage} from "./ProfilePage";
import {connect} from "react-redux";
import {
    changeUserStatusTC,
    getUserProfileTC,
    getUserStatusTC,
    savePhoto, saveProfile,
    UserProfile
} from "./ProfileReducer";
import {RootStateType} from "../../../redux/Store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {getIsAuth, getMyId, getProfile, getStatus} from "./ProfileSelectors";




class ProfilePageContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId){userId = String(this.props.myId)}
        this.props.getUserProfileTC(+userId)
        this.props.getUserStatusTC(+userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.match.params.userId !== this.props.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return <ProfilePage {...this.props}
                            profile={this.props.profile}
                            status={this.props.status}
                            isOwner={!this.props.match.params.userId}
                            changeStatus={this.props.changeUserStatusTC}
                            savePhoto={this.props.savePhoto}
                            saveProfile={this.props.saveProfile}
        />
    }
}

const MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    myId: getMyId(state),
    isAuth: getIsAuth(state)
})
const MapDispatchToProps: MapDispatchToPropsType = {getUserProfileTC, getUserStatusTC, changeUserStatusTC, savePhoto, saveProfile}

export default compose<ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfilePageContainer)




type ProfilePagePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = ProfilePagePropsType & RouteComponentProps<{userId: string }>

type MapStateToPropsType = {
    profile: UserProfile
    status: string
    myId: number | null
    isAuth: boolean
}


type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
    getUserStatusTC: (userId: number) => void
    changeUserStatusTC: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: UserProfile) => void
}
