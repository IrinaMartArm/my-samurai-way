import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {TextAria} from "../../../components/TextAria";
import {Button} from "../../../components/Button";
import React from "react";
import {ContactType, MessagesType} from "../../../redux/DialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type PropsType = {
    contacts: ContactType[]
    messages: MessagesType[]
    newMessageText: string
    addMessage: () => void
    changeMessageText: (message: string) => void
}

export const Dialogs = (props:  PropsType) => {

    const {messages, newMessageText, changeMessageText, contacts, addMessage} = props

    const myMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)

    const friendsMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)


    const onAddMessage = () => {
        addMessage()
    }

    const onChangeHandler = (message: string) => {
        changeMessageText(message)
    }

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
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </>
    );
}










export const AddMessageForm: React.FC<InjectedFormProps<FormData>> = (props) => {

    return (
        <S.Form onSubmit={props.handleSubmit}>
            <Field name='newMessageText'
                   component='textarea'
                   placeholder='Enter your message'/>
            <Button disabled={false} onClick={()=>{}} name={'Add Post'}/>
        </S.Form>
    )
}

type FormData = {
    newMessageText: string
}

const AddMessageFormRedux = reduxForm<FormData>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)