import {RootStateType} from "../../../redux/Store";

export const getProfile = (state: RootStateType) => {
    return state.profileReducer.profile
}
export const getStatus = (state: RootStateType) => {
    return state.profileReducer.status
}
export const getMyId = (state: RootStateType) => {
    return state.authReducer.id
}
