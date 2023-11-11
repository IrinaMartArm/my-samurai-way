import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {ActionType, addMessageAC, addPostAC, changeMessageAC, ContactType, MessagesType} from "../../../redux/state";
import {TextAria} from "../../../components/TextAria";
import {Button} from "../../../components/Button";
import React from "react";


type PropsType = {
    contacts: ContactType[]
    messages: MessagesType[]
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props:  PropsType) => {

    const myMessages = props.messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)
    const friendsMessages = props.messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)


    const addPost = () => {
        props.dispatch(addMessageAC())
    }

    const onChangeHandler = (message: string) => {
        props.dispatch(changeMessageAC(message))
    }


    return (
        <>
            <S.Dialogs>
                <S.DialogPersons>
                    {props.contacts.map(el =>  <DialogPerson key={el.id} id={el.id} name={el.name}/>)}
                </S.DialogPersons>
                <S.DialogList>
                    <div>
                        {myMessages}
                    </div>
                    <div>
                        {friendsMessages}
                    </div>
                </S.DialogList>
            </S.Dialogs>
            <S.TextAreaBox>
                <TextAria value={props.newMessageText} onChange={onChangeHandler}/>
                <Button onClick={addPost} name={'Add Post'}/>
            </S.TextAreaBox>
        </>
    );
}

