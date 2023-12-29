import {Api, AuthDataType} from "../../api/Api";
import {Dispatch} from "redux";

const initState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const AuthReducer = (state: InitStateType = initState, action: AuthReducerActionType): InitStateType => {
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

export const authTC = () => (dispatch: Dispatch) => {
    Api.auth()
        .then((res) => {
            if(res.resultCode === 0) {
                dispatch(setAuthUserData(res.data))
            }
        })
}

export type InitStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserData>