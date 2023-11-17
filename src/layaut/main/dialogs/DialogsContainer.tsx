import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {ActionType, addMessageAC, addPostAC, changeMessageAC, ContactType, MessagesType} from "../../../redux/state";
import {TextAria} from "../../../components/TextAria";
import {Button} from "../../../components/Button";
import React from "react";
import {StoreAppType} from "../../../redux/Store";
import {Dialogs} from "./Dialogs";


type PropsType = {
    store: StoreAppType
}

export const DialogsContainer = (props:  PropsType) => {

    const state = props.store.getState()


    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const changeMessageText = (message: string) => {
        props.store.dispatch(changeMessageAC(message))
    }


    return (
        <Dialogs addMessage={addMessage}
                 changeMessageText={changeMessageText}
                 newMessageText={state.dialogsReducer.newMessageText}
                 contacts={state.dialogsReducer.contacts}
                 messages={state.dialogsReducer.messages}
        />
    );
}

// contacts: ContactType[]
// messages: MessagesType[]
// addMessage: () => void
//     changeMessageText:
