

export type UserType = {id: string
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
}

export type ActionsType = ReturnType<typeof followAC>
                            | ReturnType<typeof unfollowAC>
                            | ReturnType<typeof setUsersAC>

const initialState: UsersType = {
    items: [
        // {id: v1(), avatar: i, fullName: 'Suren', followed: true, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
        // {id: v1(), avatar: i, fullName: 'Suren', followed: true, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
        // {id: v1(), avatar: i, fullName: 'Suren', followed: false, status: 'boss', location: {country: 'Armenia', city: 'Erevan'}},
    ]
}

export const UsersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOW': {
            return {...state, items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, items: [...state.items, ...action.items]}
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
export const setUsersAC = (items: UserType[]) => {
    return {type: 'SET_USERS', items} as const
}