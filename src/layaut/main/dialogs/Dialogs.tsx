import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import React from "react";
import {ContactType, MessagesType} from "../../../redux/DialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../../components/Button";


type PropsType = {
    contacts: ContactType[]
    messages: MessagesType[]
    addMessage: (message: string) => void
}

export const Dialogs = (props:  PropsType) => {

    const {messages, contacts, addMessage} = props

    const myMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)

    const friendsMessages = messages.map(m => <Messages key={m.id} id={m.id} text={m.text}/>)


    const addNewMessage = (formData: FormData) => {
        addMessage(formData.newMessageText)
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </>
    );
}










export const AddMessageForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    const style = {
        backgroundColor: 'transparent',
        padding: '3px',
        resize: 'none',
        height: '50px',
    }

    return (
        <S.Form onSubmit={props.handleSubmit}>
            <Field name='newMessageText'
                   component='textarea'
                   placeholder='Enter your message'
                   style={style}
            />
            <Button disabled={false} onClick={()=>{}} name={'Add Message'}/>
        </S.Form>
    )
}

type FormData = {
    newMessageText: string
}

const AddMessageFormRedux = reduxForm<FormData>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)