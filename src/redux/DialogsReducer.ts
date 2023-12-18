
const initialState: DialogsPageType = {
    contacts: [],
    messages: [],
    newMessageText: ''
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType  => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            return {...state, newMessageText: action.message}
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: '1',
                text: state.newMessageText
            }
            state.newMessageText = ''
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const changeMessageAC = (message: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        message: message
    } as const
}

export type DialogsReducerActionType = ReturnType<typeof changeMessageAC>
    | ReturnType<typeof addMessageAC>

export type DialogsPageType = {
    contacts: ContactsType
    newMessageText: string
    messages: MessagesType[]
}
export type MessagesType = {
    id: string
    text: string
}
export type ContactType = {
    id: number
    name: string
}
export type ContactsType = ContactType[]