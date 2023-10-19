import { S } from "./StyledDialogs";
import { DialogItem } from "./DialogItem";
import { Messages } from "./Messages";

export const Dialogs = () => {
    return (  
        <S.Dialogs>
            <S.DialogItems>
                <DialogItem id="1" name="Ira"/>
                <DialogItem id="2" name="Suren"/>
                <DialogItem id="3" name="Arina"/>
            </S.DialogItems>
            <S.DialogList>
                <Messages text='hi'/>
                <Messages text='hello'/>
            </S.DialogList>
        </S.Dialogs>
    );
}

