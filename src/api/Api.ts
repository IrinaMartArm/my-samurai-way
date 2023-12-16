import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6188de65-874c-45aa-9d34-0633fd77b565'
    }
})

export const Api = {
    follow(id: string) {
            return instance.post(`follow/${id}`)
    },
    unfollow(id: string)  {
        return instance.delete(`follow/${id}`)
    },
    async getUsers(page: number = 1, pageSize: number = 10) {
        const res = await instance.get(`users?page=${page}&count=${pageSize}`);
        return res.data;
    },
    async auth(){
        const res = await instance.get<ResponseType>('auth/me')
        return res.data
    }
}


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