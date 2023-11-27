
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/Store";
import {ActionsType, followAC, setUsersAC, unfollowAC, UserType} from "../../../redux/UsersReducer";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

