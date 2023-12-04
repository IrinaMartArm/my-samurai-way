

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
    pageSize: number
    totalCount: number
    currentPage: number
}

export type ActionsType = ReturnType<typeof followAC>
                            | ReturnType<typeof unfollowAC>
                            | ReturnType<typeof setUsersAC>
                            | ReturnType<typeof setCurrentPageAC>
                            | ReturnType<typeof setTotalCountAC>

const initialState: UsersType = {
    items: [],
    pageSize: 3,
    totalCount: 0,
    currentPage: 1
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
            return {...state, items: action.items}
        }
        case 'SET_CURRENT-PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'SET_TOTAL-COUNT': {
            return {...state, totalCount: action.count}
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
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT-PAGE', page} as const)

export const setTotalCountAC = (count: number) => ({type: 'SET_TOTAL-COUNT', count} as const)