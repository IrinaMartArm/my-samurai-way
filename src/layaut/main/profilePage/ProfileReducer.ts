import {v1} from "uuid";
import {ProfileApi} from "../../../api/Api";
import {AppThunk, RootDispatchType, RootStateType} from "../../../redux/Store";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";



const initialState: ProfilePageType = {
    posts: [
        {id: v1(), post: 'hi', likes: 28},
        {id: v1(), post: 'hello', likes: 28},
        {id: v1(), post: 'yo', likes: 28},
    ],
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
            small: '',
            large: 'string'
        }
    },
    status: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {

    switch (action.type) {
        case 'PROFILE/ADD-POST':
            let newPost: PostType = {
            id: v1(),
            post: action.post,
            likes: 0
            }
            return  {...state, posts: [newPost, ...state.posts]}
        case 'PROFILE/SET_USER-PROFILE':
            return {...state, profile: action.profile}
        case 'PROFILE/SET_USER-STATUS':
            return {...state, status: action.status}
        case 'PROFILE/CHANGE_USER-STATUS':
            return {...state, status: action.status}
        case 'PROFILE/REMOVE-POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        case 'PROFILE/SET-PHOTO':
            return {...state, profile: {...state.profile, photos: {...state.profile.photos, small: action.file}}   }
        default:
            return state
    }
}

export const addPost = (post: string) => ({type: 'PROFILE/ADD-POST', post} as const)
export const setUserProfile = (profile: UserProfile) => ({type: 'PROFILE/SET_USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'PROFILE/SET_USER-STATUS', status}as const)
export const changeUserStatus = (status: string) => ({type: 'PROFILE/CHANGE_USER-STATUS', status}as const)
export const removePost = (id: string) => ({type: 'PROFILE/REMOVE-POST', id} as const)
export const setPhoto = (file: File) => ({type: 'PROFILE/SET-PHOTO', file} as const)


export const getUserProfileTC = (userId: number): AppThunk => async (dispatch) => {
     const res = await ProfileApi.getProfile(userId)
     dispatch(setUserProfile(res.data))
}
export const getUserStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await ProfileApi.getUserStatus(userId)
        dispatch(setUserStatus(res.data.status))
    } catch (err) {

    }
}
export const changeUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await ProfileApi.updateStatus(status)
        if(res.data.resultCode === 0) {
            dispatch(changeUserStatus(status))
        }

    } catch (err) {

    }
}

export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    try {
        const res = await ProfileApi.savePhoto(file)
        if(res.data.resultCode === 0) {
            dispatch(setPhoto(res.data.data.photos))
        }
    } catch (err) {

    }
}

export const saveProfile = (formData: UserProfile) : any => async (dispatch: RootDispatchType, getState: any) => {
    const userId = getState().authReducer.id
    try {
        const res = await ProfileApi.saveProfile(formData)
console.log(res.data.resultCode)
        if(res.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Error'
            dispatch(stopSubmit('profileInfoForm', {_error: message}))
            return Promise.reject(res.data)
        }
    } catch (err) {

    }
}


export type ProfileReducerActionType = ReturnType<typeof setUserProfile>
                | ReturnType<typeof addPost>
                | ReturnType<typeof setUserStatus>
                | ReturnType<typeof changeUserStatus>
                | ReturnType<typeof removePost>
                | ReturnType<typeof setPhoto>

type ContactKey = 'github'| 'vk' | 'facebook' | 'instagram' | 'twitter' | 'website' | 'youtube' | 'mainLink'
type ContactsType = Record<ContactKey, string>
export type UserProfile = {
    userId: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: any
        large: string
    }
}


// const arr = Object.values(contacts) as (keyof typeof contacts)[]
// arr.map((key)=> contacts[key])

export type ProfilePageType = {
    posts: PostType[]
    profile: UserProfile
    status: string
}

export type PostType = {
    id: string
    post: string
    likes: number
}

