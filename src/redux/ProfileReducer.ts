import {v1} from "uuid";
import {ActionType, PostType, ProfilePageType} from "./state";

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'hi', likes: 28},
        {id: v1(), post: 'hello', likes: 28},
        {id: v1(), post: 'yo', likes: 28},
    ],
    newPostText: '',
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
            id: v1(),
            post: state.newPostText,
            likes: 0
            }
            state.newPostText = ''
            return  {...state, posts: [newPost, ...state.posts]}
        case 'CHANGE-TEXT':
            return {...state, newPostText: action.post}
        default:
            return state
    }
}
