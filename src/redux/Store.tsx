import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

let rootReducer = combineReducers({
    profileReducer: ProfileReducer,
    dialogsReducer: DialogsReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type StoreAppType = typeof store

