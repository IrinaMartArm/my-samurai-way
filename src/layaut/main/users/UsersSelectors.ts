import {RootStateType} from "../../../redux/Store";

export const getUsers = (state: RootStateType) => {
    return state.usersReducer.items
}
export const getPageSize = (state: RootStateType) => {
    return state.usersReducer.pageSize
}
export const getTotalCount = (state: RootStateType) => {
    return state.usersReducer.totalCount
}
export const getIsLoading = (state: RootStateType) => {
    return state.usersReducer.isLoading
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersReducer.currentPage
}
export const getBlocked = (state: RootStateType) => {
    return state.usersReducer.blocked
}
