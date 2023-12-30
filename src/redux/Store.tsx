import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer, ProfileReducerActionType} from "../layaut/main/profilePage/ProfileReducer";
import {DialogsReducer, DialogsReducerActionType} from "../layaut/main/dialogs/DialogsReducer";
import {UserReducerActionsType, UsersReducer} from "../layaut/main/users/UsersReducer";
import {AuthReducer, AuthReducerActionType} from "../layaut/Login/AuthReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {FormAction, reducer as formReducer} from "redux-form"
import {AppReducer, AppReducerAction} from "../App/AppReducer";

let rootReducer = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    usersReducer: UsersReducer,
    authReducer: AuthReducer,
    appReducer: AppReducer,
    form: formReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type RootDispatchType = ThunkDispatch<RootStateType, unknown, BasicAction>
export type BasicAction = UserReducerActionsType
                    | ProfileReducerActionType
                    | DialogsReducerActionType
                    | AuthReducerActionType
                    | AppReducerAction

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, BasicAction>

export const useAppDispatch: RootDispatchType = useDispatch


export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store