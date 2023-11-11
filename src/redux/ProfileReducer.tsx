import {v1} from "uuid";
import {ActionType, PostType, ProfilePageType} from "./state";

export const ProfileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
            id: v1(),
            post: action.post,
            likes: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-TEXT':
            state.newPostText = action.post
            return state
        default:
            return state
    }
}
