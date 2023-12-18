import {v1} from "uuid";
import {Api} from "../api/Api";
import {AppThunk} from "./Store";


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

export const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {

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

export const addPost = () => ({type: 'ADD-POST',} as const)
export const changePost = (post: string) => ({type: 'CHANGE-TEXT', post} as const)
export const setUserProfile = (profile: UserProfile) => ({type: 'SET_USER-PROFILE', profile} as const)


export const getProfileTC = (userId: number): AppThunk => async (dispatch) => {
     const res = await Api.getProfile(userId)
     dispatch(setUserProfile(res.data))
}



export type ProfileReducerActionType = ReturnType<typeof setUserProfile>
                | ReturnType<typeof changePost>
                | ReturnType<typeof addPost>

type ContactKey = 'github'| 'vk' | 'facebook' | 'instagram' | 'twitter' | 'website' | 'youtube' | 'mainLink'
type ContactsType = Record<ContactKey, string>
export type UserProfile = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string
        large: string
    }
}
// const contacts: ContactsType = {vk: 'vk', github: 'github', facebook: 'facebook', instagram: 'instagram', mainLink: 'mainLink', twitter: 'twitter', website: 'website', youtube: 'youtube'}

// const arr = Object.values(contacts) as (keyof typeof contacts)[]
// arr.map((key)=> contacts[key])

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: UserProfile
}

export type PostType = {
    id: string
    post: string
    likes: number
}

