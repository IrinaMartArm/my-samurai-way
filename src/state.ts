import { v1 } from "uuid";

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
type PostType = {
    id: string
    post: string
    likes: number
}
export type PostsType = PostType[]
export type ProfilePage = {
    posts: PostsType
    newPostText: string
}
export type DialogsPageType = {
    contacts: ContactsType
    newMessageText: string
    messages: MessagesType[]
}
export type StateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    _rerender: () => void
    // addPost: (post: string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}
export type ActionType = ReturnType<typeof addPostAC>
                        | ReturnType<typeof changePostAC>
                        | ReturnType<typeof changeMessageAC>
                        | ReturnType<typeof addMessageAC>


export const addPostAC = (post: string) => {
    return {
        type: 'ADD-POST',
        post: post
    } as const
}
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}
export const changePostAC = (post: string) => {
    return {
        type: 'CHANGE-TEXT',
        post: post
    } as const
}
export const changeMessageAC = (message: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        message: message
    } as const
}






export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: 'hi', likes: 28},
                {id: v1(), post: 'hello', likes: 28},
                {id: v1(), post: 'yo', likes: 28},
            ],
            newPostText: '',
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
    // addPost(postMess: string) {
    //
    //     let newPost: PostType = {
    //         id: v1(),
    //         // post: this._state.newPostText,
    //         post: postMess,
    //         likes: 0
    //     }
    //     this._state.posts.unshift(newPost)
    //     this._state.newPostText = ''
    //     this._rerender()
    // },
    // updateNewPostText(newText) {
    //     this._state.newPostText = newText
    //     this._rerender()
    // },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                post: action.post,
                likes: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender()
        } else if(action.type === 'CHANGE-TEXT') {
            this._state.profilePage.newPostText = action.post
            this._rerender()
        } else if(action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.message
            this._rerender()
        } else if(action.type === 'ADD-MESSAGE') {
            let newMessage: MessagesType = {
                id: v1(),
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._rerender()
        }
    }
}

// @ts-ignore
window.store = store