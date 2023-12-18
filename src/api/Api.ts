import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '6188de65-874c-45aa-9d34-0633fd77b565'
    }
})

export const Api = {
    follow(id: number) {
            return instance.post<ResponseType>(`follow/${id}`)
    },
    unfollow(id: number)  {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    async getUsers(page: number = 1, pageSize: number = 10) {
        const res = await instance.get<ResponseUser>(`users?page=${page}&count=${pageSize}`);
        return res.data;
    },
    async auth(){
        const res = await instance.get<ResponseType, AxiosResponse<ResponseType<AuthDataType>>>('auth/me')
        return res.data
    }
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


// AxiosResponse<ResponseUser>