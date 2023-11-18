import {v1} from "uuid";
import {ActionType, DialogsPageType, MessagesType} from "./state";

const initialState: DialogsPageType = {
    contacts: [
        {id: v1(), name: 'Ira'},
        {id: v1(), name: 'Suren'},
        {id: v1(), name: 'Arina'},
        {id: v1(), name: 'Liana'},
    ],
    messages: [
        {id: v1(), text: 'hi'},
        {id: v1(), text: 'how are you?'},
        {id: v1(), text: 'ok!'},
    ],
    newMessageText: ''
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType  => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            return {...state, newMessageText: action.message}
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: v1(),
                text: state.newMessageText
            }
            state.newMessageText = ''
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}
