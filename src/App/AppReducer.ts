import {AuthTC} from "../layaut/Login/AuthReducer";
import {RootDispatchType} from "../redux/Store";

const initialState: InitState = {
    isInitialized: false
}
type InitState = {
    isInitialized: boolean
}
export const AppReducer = (state: InitState = initialState, action: AppReducerAction): InitState => {
    switch (action.type) {
        case 'APP/SET-INITIAL':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

const setIsInitial = (isInitialized: boolean) => ({type: 'APP/SET-INITIAL', isInitialized} as const)

export type AppReducerAction = ReturnType<typeof setIsInitial>


export const IsInitializedApp = () => (dispatch: RootDispatchType) => {
    const promise = [dispatch(AuthTC()), ]
    Promise.all([promise])
        .then(() => dispatch(setIsInitial(true)))
    console.log('setIsInitial')
}