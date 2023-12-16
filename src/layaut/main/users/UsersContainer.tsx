import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {
    follow, setBlocked, setCurrentPage, setLoading, setTotalCount, setUsers, unfollow, UserType
} from "../../../redux/UsersReducer";
import React from "react";
import {Preloader} from "../../../components/Preloader";
import {Api} from "../../../api/Api";


export class UsersClassContainer extends React.Component<MapStateToProps & MapDispatchToProps> {

    componentDidMount() {
        this.props.setLoading(true)
        Api.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res)=> {
                this.props.setLoading(false)
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
            })
    }
    onClickHandler = (p: number)=> {
        this.props.setLoading(true)
        this.props.setCurrentPage(p)
        Api.getUsers(p, this.props.pageSize)
            .then((res) => {
                    this.props.setLoading(false)
                    this.props.setUsers(res.items)
                    this.props.setTotalCount(res.totalCount)
                })
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
                           setBlocked={this.props.setBlocked}
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
    blocked: Array<string>
}
type MapDispatchToProps = {

    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) =>void
    setCurrentPage: (page: number) => void
    setTotalCount: (c: number) => void
    setLoading: (status: boolean) => void
    setBlocked: (userId: string, status: boolean) => void
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
        setUsers,
        setCurrentPage,
        setTotalCount,
        setLoading,
        setBlocked
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

