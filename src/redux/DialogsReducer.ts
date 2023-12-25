
const initialState: DialogsPageType = {
    contacts: [],
    messages: [],
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType  => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: '1',
                text: action.message
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        message
    } as const
}


export type DialogsReducerActionType = ReturnType<typeof addMessageAC>

export type DialogsPageType = {
    contacts: ContactsType
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