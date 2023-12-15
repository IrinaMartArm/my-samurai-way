import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {follow, setCurrentPage, setLoading, setTotalCount, setUsers, unfollow, UserType
        } from "../../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Preloader} from "../../../components/Preloader";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export class UsersClassContainer extends React.Component<MapStateToProps & MapDispatchToProps> {
    componentDidMount() {
        this.props.setLoading(true)
        instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res)=> {
                this.props.setLoading(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }
    onClickHandler = (p: number)=> {
        this.props.setLoading(true)
        this.props.setCurrentPage(p)
        instance.get(`users?page=${p}&count=${this.props.pageSize}`)
            .then((res) =>
                {
                    this.props.setLoading(false)
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)
                }
            )
    }

    render () {
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Users users={this.props.users}
                           currentPage={this.props.currentPage}
                           pageSize={this.props.pageSize}
                           totalCount={this.props.totalCount}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           onClickHandler={this.onClickHandler}
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
}
type MapDispatchToProps = {

    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) =>void
    setCurrentPage: (page: number) => void
    setTotalCount: (c: number) => void
    setLoading: (status: boolean) => void
}
let mapStateToProps = (state: RootStateType): MapStateToProps => {

    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        setLoading
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

