import {AuthApi, FormData} from "../../api/Api";
import {Dispatch} from "redux";
import {RootDispatchType} from "../../redux/Store";

const initState = {
    id: 0,
    email: '',
    password: '',
    isAuth: false
}

export const AuthReducer = (state: InitStateType = initState, action: AuthReducerActionType): InitStateType => {
    switch (action.type) {
        case 'SET_USER-DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = ( id: number | null,
                                email: string | null,
                                 password: string | null,
                                isAuth: boolean) => {
    return {type: 'SET_USER-DATA', payload: {id, email, password, isAuth}} as const
}

export const authTC = () => (dispatch: Dispatch) => {
    AuthApi.me()
        .then((res) => {
            const {id, email, login} = res.data
            if(res.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const LoginTC = (data: FormData) => (dispatch: RootDispatchType) => {
    AuthApi.login(data)
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(authTC())
            }
        })
}
export const LogoutTC = () => (dispatch: Dispatch) => {
    AuthApi.logout()
        .then((res) => {
            if(res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export type InitStateType = {
    id: number | null
    email: string | null
    password: string | null
    isAuth: boolean
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserData>