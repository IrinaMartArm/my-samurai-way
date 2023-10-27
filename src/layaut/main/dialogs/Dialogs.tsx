import { S } from "./StyledDialogs";
import { DialogPerson } from "./DialogPerson";
import { Messages } from "./Messages";
import { v1 } from "uuid";
import { ContactType } from "../../../App";

type PropsType = {
    contacts: ContactType[]
}

export const Dialogs = (props:  PropsType) => {

    return (  
        <S.Dialogs>
            <S.DialogPersons>
                {props.contacts.map(el =>  <DialogPerson key={el.id} id={el.id} name={el.name}/>)}
            </S.DialogPersons>
            <S.DialogList>
                {props.contacts.map(el =>  el.messages.map(m => <Messages key={el.id} id={el.id} text={m.text}/>))}
            </S.DialogList>
        </S.Dialogs>
    );
}

