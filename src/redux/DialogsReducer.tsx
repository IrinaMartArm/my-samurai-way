import {v1} from "uuid";
import {ActionType, DialogsPageType, MessagesType} from "./state";

export const DialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType  => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.message
            return state
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: v1(),
                text: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}
