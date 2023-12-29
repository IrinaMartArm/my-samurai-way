import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {
    followTC, getUsersTC, setBlocked, unfollowTC, UserType
} from "./UsersReducer";
import React, {ComponentType} from "react";
import {Preloader} from "../../../components/Preloader";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<MapStateToProps & MapDispatchToProps> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onClickHandler = (page: number)=> {
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render () {
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Users users={this.props.users}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           totalCount={this.props.totalCount}
                           followTC={this.props.followTC}
                           unfollowTC={this.props.unfollowTC}
                           onClickHandler={this.onClickHandler}
                           blocked={this.props.blocked}
                    />}

            </>
        );
    }
}

let mapStateToProps = (state: RootStateType): MapStateToProps => {

    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading,
        blocked: state.usersReducer.blocked
    }
}

let mapDispatchToProps = {
        followTC,
        unfollowTC,
        setBlocked,
        getUsersTC
}

export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)


type MapStateToProps = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    blocked: Array<number>
}
type MapDispatchToProps = {
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    getUsersTC: (page: number, pageSize: number) => void
}