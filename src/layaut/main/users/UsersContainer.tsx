import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {
    follow, setCurrentPage, setDisabled, setLoading, setTotalCount, setUsers, unfollow, UserType
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
                           setDisabled={this.props.setDisabled}
                           disable={this.props.disabled}
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
    disabled: boolean
}
type MapDispatchToProps = {

    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) =>void
    setCurrentPage: (page: number) => void
    setTotalCount: (c: number) => void
    setLoading: (status: boolean) => void
    setDisabled: (status: boolean) => void
}
let mapStateToProps = (state: RootStateType): MapStateToProps => {

    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading,
        disabled: state.usersReducer.disabled
    }
}

let mapDispatchToProps = {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        setLoading,
        setDisabled
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)

