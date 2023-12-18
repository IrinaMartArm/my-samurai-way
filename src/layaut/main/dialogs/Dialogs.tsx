import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {TextAria} from "../../../components/TextAria";
import {Button} from "../../../components/Button";
import React from "react";
import {ContactType, MessagesType} from "../../../redux/DialogsReducer";
import {Redirect} from "react-router-dom";


type PropsType = {
    contacts: ContactType[]
    messages: MessagesType[]
    isAuth: boolean
    newMessageText: string
    addMessage: () => void
    changeMessageText: (message: string) => void
}

export const Dialogs = (props:  PropsType) => {

    const {messages,isAuth , newMessageText, changeMessageText, contacts, addMessage} = props

    const myMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)

    const friendsMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)


    const onAddMessage = () => {
        addMessage()
    }

    const onChangeHandler = (message: string) => {
        changeMessageText(message)
    }

    if(!isAuth) return <Redirect to={'/login'}/>

    return (
        <>
            <S.Dialogs>
                <S.DialogPersons>
                    {contacts.map(el =>  <DialogPerson key={el.id} id={el.id} name={el.name}/>)}
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
                <TextAria value={newMessageText} onChange={onChangeHandler}/>
                <Button onClick={onAddMessage} name={'Add Post'}/>
            </S.TextAreaBox>
        </>
    );
}

