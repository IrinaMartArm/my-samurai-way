import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {
    ActionsType,
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../../redux/UsersReducer";
import React from "react";
import axios from "axios";


export class UsersClass extends React.Component<MapStateToProps & MapDispatchToProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res)=> {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }
    onClickHandler = (p: number)=> {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((res) =>
                {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)
                }
            )
    }

    render () {
        return (
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onClickHandler={this.onClickHandler}
            />
        );
    }
}
type MapStateToProps = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
}
type MapDispatchToProps = {

    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) =>void
    setCurrentPage: (page: number) => void
    setTotalCount: (c: number) => void
}
let mapStateToProps = (state: RootStateType): MapStateToProps => {

    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void):MapDispatchToProps => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page: number) => {dispatch(setCurrentPageAC(page))},
        setTotalCount: (c: number) => {dispatch(setTotalCountAC(c))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

