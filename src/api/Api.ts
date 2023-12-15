import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})


export type ResponseType = {
    resultCode: number
    messages: string[],
    data: AuthDataType
    fieldsErrors: []
}

export type AuthDataType = {
    id: number
    email: string
    login: string
}