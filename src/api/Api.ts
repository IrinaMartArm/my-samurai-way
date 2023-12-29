import axios, {AxiosResponse} from "axios";
import {ProfilePageType, UserProfile} from "../layaut/main/profilePage/ProfileReducer";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6188de65-874c-45aa-9d34-0633fd77b565'
    }
})

export const Api = {
    async follow(id: number) {
            return await instance.post<ResponseType>(`follow/${id}`)
    },
    async unfollow(id: number)  {
        return await instance.delete<ResponseType>(`follow/${id}`)
    },
    async getUsers(page: number = 1, pageSize: number = 10) {
        const res = await instance.get<ResponseUser>(`users?page=${page}&count=${pageSize}`);
        return res.data;
    },
}
export const ProfileApi = {
    async getProfile(userId: number){
        return await instance.get<UserProfile>(`profile/${userId}`)
    },
    async getUserStatus(userId: number){
        return await instance.get<ProfilePageType>(`profile/status/${userId}`)
    },
    async updateStatus(status: string) {
        return await instance.put<ResponseType>(`profile/status`, {status})
    }
}
export const AuthApi = {
    async login(data: FormData) {
        return await instance.post<ResponseType<{userId?: number}>, AxiosResponse<ResponseType<{userId?: number}>>, FormData>('auth/login', data)
    },
    async logout() {
        return await instance.delete<ResponseType>('auth/login')
    },
    async me(){
        const res = await instance.get<ResponseType, AxiosResponse<ResponseType<AuthDataType>>>('auth/me')
        return res.data
    },
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[],
    data: D
    fieldsErrors: []
}

export type AuthDataType = {
    id: number
    email: string
    login: string
}

type User =  {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

type ResponseUser = {
    items: User[]
    totalCount: number
    error: string
}
export type FormData = {
    email: string
    password: string
    rememberMe: boolean
}


// AxiosResponse<ResponseUser>