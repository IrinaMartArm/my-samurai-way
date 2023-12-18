import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {
    follow, getUsersTC, setBlocked, unfollow, UserType
} from "../../../redux/UsersReducer";
import React from "react";
import {Preloader} from "../../../components/Preloader";



export class UsersClassContainer extends React.Component<MapStateToProps & MapDispatchToProps> {

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
                           followTC={this.props.follow}
                           unfollowTC={this.props.unfollow}
                           onClickHandler={this.onClickHandler}
                           blocked={this.props.blocked}
                    />}

            </>
        );
    }
}
type MapStateToProps = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isLoading: boolean
    blocked: Array<number>
}
type MapDispatchToProps = {

    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UserType[]) =>void
    // setCurrentPage: (page: number) => void
    // setTotalCount: (c: number) => void
    // setLoading: (status: boolean) => void
    // setBlocked: (userId: number, status: boolean) => void
    getUsersTC: (page: number, pageSize: number) => void
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
        follow,
        unfollow,
        setBlocked,
        getUsersTC
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

