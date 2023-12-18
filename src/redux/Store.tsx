import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer, ProfileReducerActionType} from "./ProfileReducer";
import {DialogsReducer, DialogsReducerActionType} from "./DialogsReducer";
import {UserReducerActionsType, UsersReducer} from "./UsersReducer";
import {AuthReducer, AuthReducerActionType} from "./AuthReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

let rootReducer = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    usersReducer: UsersReducer,
    authReducer: AuthReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, BasicAction>
export type BasicAction = UserReducerActionsType
                    | ProfileReducerActionType
                    | DialogsReducerActionType
                    | AuthReducerActionType

export const useAppDispatch: RootDispatchType = useDispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store