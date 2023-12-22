import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer, ProfileReducerActionType} from "./ProfileReducer";
import {DialogsReducer, DialogsReducerActionType} from "./DialogsReducer";
import {UserReducerActionsType, UsersReducer} from "./UsersReducer";
import {AuthReducer, AuthReducerActionType} from "./AuthReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {reducer as formReducer} from "redux-form"

let rootReducer = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    usersReducer: UsersReducer,
    authReducer: AuthReducer,
    form: formReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, BasicAction>
export type BasicAction = UserReducerActionsType
                    | ProfileReducerActionType
                    | DialogsReducerActionType
                    | AuthReducerActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, BasicAction>

export const useAppDispatch: RootDispatchType = useDispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store