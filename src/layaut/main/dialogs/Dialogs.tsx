import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import {ContactType} from "../../../state";
import {TextAria} from "../../../components/TextAria";
import {useState} from "react";


type PropsType = {
    contacts: ContactType[]
}

export const Dialogs = (props:  PropsType) => {

    const [post, setPost] = useState('')

    const myMessages = props.contacts.map(el =>  el.messages.map(m => <Messages key={el.id} id={el.id} text={m.text}/>))
    const friendsMessages = props.contacts.map(el =>  el.messages.map(m => <Messages key={el.id} id={el.id} text={m.text}/>))

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
            <TextAria value={post} onChange={setPost}/>
        </>
    );
}

