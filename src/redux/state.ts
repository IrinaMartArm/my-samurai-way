import { v1 } from "uuid";
import {addPost, changePost, ProfilePageType, ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

export type MessagesType = {
    id: string
    text: string
}
export type ContactType = {
    id: string
    name: string
    // messages: MessagesType[]
}
export type ContactsType = ContactType[]
export type PostType = {
    id: string
    post: string
    likes: number
}
export type PostsType = PostType[]

export type DialogsPageType = {
    contacts: ContactsType
    newMessageText: string
    messages: MessagesType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    _rerender: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType = ReturnType<typeof addPost>
                        | ReturnType<typeof changePost>
                        | ReturnType<typeof changeMessageAC>
                        | ReturnType<typeof addMessageAC>



export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const changeMessageAC = (message: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        message: message
    } as const
}


export const _store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: 'hi', likes: 28},
                {id: v1(), post: 'hello', likes: 28},
                {id: v1(), post: 'yo', likes: 28},
            ],
            newPostText: '',
            profile: {
                userId: 'string',
                lookingForAJob: true,
                lookingForAJobDescription: 'string',
                fullName: 'string',
                contacts: {
                    github: 'string',
                    vk: 'string',
                    facebook: 'string',
                    instagram: 'string',
                    twitter: 'string',
                    website: 'string',
                    youtube: 'string',
                    mainLink: 'string',
                },
                photos: {
                    small: 'string',
                    large: 'string'
                }
            }
        },
        dialogsPage: {
            contacts: [
                {id: v1(), name: 'Ira'},
                {id: v1(), name: 'Suren'},
                {id: v1(), name: 'Arina'},
                {id: v1(), name: 'Liana'},
            ],
            messages: [
                {id: v1(), text: 'hi'},
                {id: v1(), text: 'how are you?'},
                {id: v1(), text: 'ok!'},
            ],
            newMessageText: ''
        },
    },
    _rerender() {
        console.log('')
    },

    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        // this._state.profilePage =
        // ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage =
        DialogsReducer(this._state.dialogsPage, action)
        this._rerender()
    }
}

// @ts-ignore
window.store = _store