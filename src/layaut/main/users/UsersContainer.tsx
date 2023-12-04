
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
import {UsersClass} from "./UsersClass";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        currentPage: state.usersReducer.currentPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page: number) => {dispatch(setCurrentPageAC(page))},
        setTotalCount: (c: number) => {dispatch(setTotalCountAC(c))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)

