import {Dispatch} from "redux";
import {Api} from "../../../api/Api";


export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string
    photos: {
        small: string,
        large: string
    }
}

export type UsersType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isLoading: boolean
    blocked: Array<number>
}

export type UserReducerActionsType = ReturnType<typeof follow>
                            | ReturnType<typeof unfollow>
                            | ReturnType<typeof setUsers>
                            | ReturnType<typeof setCurrentPage>
                            | ReturnType<typeof setTotalCount>
                            | ReturnType<typeof setLoading>
                            | ReturnType<typeof setBlocked>

const initialState: UsersType = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
    blocked: []
}

export const UsersReducer = (state: UsersType = initialState, action: UserReducerActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, items: action.items}
        case 'SET_CURRENT-PAGE':
            return {...state, currentPage: action.page}
        case 'SET_TOTAL-COUNT':
            return {...state, totalCount: action.count}
        case 'SET_IS-LOADING':
            return {...state, isLoading: action.isLoading}
        case 'SET_BLOCKED':
            return {...state, blocked: action.isLoading ?
                    [...state.blocked, action.id] :
                    state.blocked.filter(id => id !== action.id)}
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (items: UserType[]) =>({type: 'SET_USERS', items} as const)
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT-PAGE', page} as const)
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL-COUNT', count} as const)
export const setLoading = (isLoading: boolean) => ({type: 'SET_IS-LOADING', isLoading} as const)
export const setBlocked = (id: number, isLoading: boolean) => ({type: 'SET_BLOCKED', id, isLoading} as const)



export const getUsersTC = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    Api.getUsers(page,pageSize)
        .then((res)=> {
           dispatch(setLoading(false))
           dispatch(setUsers(res.items))
           dispatch(setTotalCount(res.totalCount))
        })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setBlocked(userId, true))
    Api.follow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(setBlocked(userId, false))
        })
}


export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setBlocked(userId, true))
    Api.unfollow(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(setBlocked(userId, false))
        })
}









