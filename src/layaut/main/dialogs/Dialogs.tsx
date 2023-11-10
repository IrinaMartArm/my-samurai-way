import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {ActionType, addPostAC, changePostAC, ContactType} from "../../../state";
import {TextAria} from "../../../components/TextAria";
import {Button} from "../../../components/Button";
import React from "react";



type PropsType = {
    contacts: ContactType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props:  PropsType) => {

    const myMessages = props.contacts.map(el =>  el.messages.map(m => <Messages key={el.id} id={el.id} text={m.text}/>))
    const friendsMessages = props.contacts.map(el =>  el.messages.map(m => <Messages key={el.id} id={el.id} text={m.text}/>))


    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangeHandler = (post: string) => {
        props.dispatch(changePostAC(post))
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
            <TextAria value={props.newPostText} onChange={onChangeHandler}/>
            <Button onClick={addPost} name={'Add Post'}/>
        </>
    );
}

