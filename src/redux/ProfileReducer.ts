import {v1} from "uuid";
import {PostsType, PostType} from "./state";

const initialState: ProfilePageType = {
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
        case 'SET_USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const changePost = (post: string) => {
    return {
        type: 'CHANGE-TEXT',
        post: post
    } as const
}

export const setUserProfile = (profile: UserProfile) => ({type: 'SET_USER-PROFILE', profile} as const)

type ActionType = ReturnType<typeof setUserProfile>
                | ReturnType<typeof changePost>
            | ReturnType<typeof addPost>


export type UserProfile = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: PostsType
    newPostText: string
    profile: UserProfile
}