

export type UserType = {
    id: string
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
    blocked: Array<string>
}

export type ActionsType = ReturnType<typeof follow>
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

export const UsersReducer = (state: UsersType = initialState, action: ActionsType): UsersType => {
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

export const follow = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (items: UserType[]) =>({type: 'SET_USERS', items} as const)
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT-PAGE', page} as const)
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL-COUNT', count} as const)
export const setLoading = (isLoading: boolean) => ({type: 'SET_IS-LOADING', isLoading} as const)
export const setBlocked = (id: string, isLoading: boolean) => ({type: 'SET_BLOCKED', id, isLoading} as const)









