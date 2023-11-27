import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";

let rootReducer = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer,
    usersReducer: UsersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type StoreAppType = typeof store

