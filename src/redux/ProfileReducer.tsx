import {v1} from "uuid";
import {ActionType, PostType, ProfilePageType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    if(action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: v1(),
            post: action.post,
            likes: 0
        }
        state.posts.unshift(newPost)
        state.newPostText = ''
    } else if(action.type === 'CHANGE-TEXT') {
        state.newPostText = action.post
    }
    return state
    // switch (action.type) {
    //     case 'ADD-POST': {
    //         let newPost: PostType = {
    //         id: v1(),
    //         post: action.post,
    //         likes: 0
    //         }
    //         state.posts.unshift(newPost)
    //         state.newPostText = ''
    //     }
    //     default:
    //         return state
    // }
}

// dispatch(action) {
//     if(action.type === 'ADD-POST') {
//         let newPost: PostType = {
//             id: v1(),
//             post: action.post,
//             likes: 0
//         }
//         this._state.profilePage.posts.unshift(newPost)
//         this._state.profilePage.newPostText = ''
//         this._rerender()
//     } else if(action.type === 'CHANGE-TEXT') {
//         this._state.profilePage.newPostText = action.post
//         this._rerender()
//     } else if(action.type === 'CHANGE-MESSAGE-TEXT') {
//         this._state.dialogsPage.newMessageText = action.message
//         this._rerender()
//     } else if(action.type === 'ADD-MESSAGE') {
//         let newMessage: MessagesType = {
//             id: v1(),
//             text: this._state.dialogsPage.newMessageText
//         }
//         this._state.dialogsPage.messages.push(newMessage)
//         this._state.dialogsPage.newMessageText = ''
//         this._rerender()
//     }
// }