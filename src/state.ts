import { v1 } from "uuid";

type MessagesType = {
    id: string
    text: string
}
  
export type ContactType = {
    id: string
    name: string
    messages: MessagesType[]
}
export type ContactsType = ContactType[]
  
type PostType = {
    id: string
    post: string
    likes: number
}
export type PostsType = PostType[]

export type StateType = {
    contacts: ContactsType
    posts: PostsType
}

export const state: StateType = {
    contacts: [
        {id: v1(), 
        name: 'Ira',  
        messages: [
            {id: v1(), text: 'hi'},
            {id: v1(), text: 'hi'},
            {id: v1(), text: 'hi'},
        ]},
        {id: v1(), 
          name: 'Suren', 
          messages: [
            {id: v1(), text: 'hello'}
        ]},
        {id: v1(), 
          name: 'Arina', 
          messages: [
            {id: v1(), text: 'how are you'}
        ]},
        {id: v1(), 
          name: 'Liana', 
          messages: [
            {id: v1(), text: 'ok'}
        ]},
    ],    
    posts: [
        {id: v1(), post: 'hi', likes: 28},
        {id: v1(), post: 'hello', likes: 28},
        {id: v1(), post: 'yoyo', likes: 28},
    ]
}