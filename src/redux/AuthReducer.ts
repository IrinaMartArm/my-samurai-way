import {AuthDataType} from "../api/Api";

const initState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const AuthReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'SET_USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {type: 'SET_USER-DATA', data} as const
}


export type InitStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
type ActionType = ReturnType<typeof setAuthUserData>