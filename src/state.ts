import { v1 } from "uuid";

type MessagesType = {
    id: string
    text: string
}
  
export type ContactType = {
    id: string
    name: string
    messages: MessagesType[]
}
export type ContactsType = ContactType[]
  
type PostType = {
    id: string
    post: string
    likes: number
}
export type PostsType = PostType[]

export type StateType = {
    contacts: ContactsType
    posts: PostsType
    newPostText: string
}

export type StoreType = {
    _state: StateType
    _rerender: () => void
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>


export const addPostAC = (post: string) => {
    return {
        type: 'ADD-POST',
        post: post
    } as const
}
export const changePostAC = (post: string) => {
    return {
        type: 'CHANGE-TEXT',
        post: post
    } as const
}




export const store: StoreType = {
    _state: {
        contacts: [
            {id: v1(),
                name: 'Ira',
                messages: [
                    {id: v1(), text: 'hi'},
                    {id: v1(), text: 'hi'},
                    {id: v1(), text: 'hi'},
                ]},
            {id: v1(),
                name: 'Suren',
                messages: [
                    {id: v1(), text: 'hello'}
                ]},
            {id: v1(),
                name: 'Arina',
                messages: [
                    {id: v1(), text: 'how are you'}
                ]},
            {id: v1(),
                name: 'Liana',
                messages: [
                    {id: v1(), text: 'ok'}
                ]},
        ],
        posts: [
            {id: v1(), post: 'hi', likes: 28},
            {id: v1(), post: 'hello', likes: 28},
            {id: v1(), post: 'yo', likes: 28},
        ],
        newPostText: ''
    },
    _rerender() {
        console.log('')
    },
    addPost(postMess: string) {

        let newPost: PostType = {
            id: v1(),
            // post: this._state.newPostText,
            post: postMess,
            likes: 0
        }
        this._state.posts.unshift(newPost)
        this._state.newPostText = ''
        this._rerender()
    },
    updateNewPostText(newText) {
        this._state.newPostText = newText
        this._rerender()
    },
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
            this._state.posts.unshift(newPost)
            this._rerender()
        } else if(action.type === 'CHANGE-TEXT') {
            this._state.newPostText = action.post
            this._rerender()
        }
    }
}


// window.st