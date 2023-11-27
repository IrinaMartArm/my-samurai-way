import {v1} from "uuid";
import i from "../../src/assets/images/Снимок-9-24-23-в-20.23.webp"

export type UserType = {id: string
    avatar: string
    fullName: string
    followed: boolean
    status: string
    location: {country: string
        city: string}
}

export type UsersType = {
    users: UserType[]
}

export type ActionsType = ReturnType<typeof followAC>
                            | ReturnType<typeof unfollowAC>
                            | ReturnType<typeof setUsersAC>

const initialState: UsersType = {
    users: [
        {id: v1(), avatar: i, fullName: 'Suren', followed: true, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
        {id: v1(), avatar: i, fullName: 'Suren', followed: true, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
        {id: v1(), avatar: i, fullName: 'Suren', followed: false, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
    ]
}

export const UsersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET_USERS',
        users: users
    } as const
}