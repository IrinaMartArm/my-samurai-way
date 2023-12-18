import {RootStateType} from "../../../redux/Store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {
    addMessageAC,
    changeMessageAC,
    ContactType,
    DialogsReducerActionType,
    MessagesType
} from "../../../redux/DialogsReducer";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";


let mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
        contacts: state.dialogsReducer.contacts
    }
}
let mapDispatchToProps = (dispatch: (action: DialogsReducerActionType) => void) => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        changeMessageText: (message: string) => {dispatch(changeMessageAC(message))}
    }
}

const RedirectComponent = WithAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent)


type MapStateToPropsType = {
    messages: MessagesType[]
    newMessageText: string
    contacts: ContactType[]
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeMessageText: (message: string) => void
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType







// type PropsType = {
//     store: StoreAppType
// }

// export const DialogsContainer = () => {
//
//     const state = store.getState()
//
//
//     const addMessage = () => {
//         props.store.dispatch(addMessageAC())
//     }
//
//     const changeMessageText = (message: string) => {
//         props.store.dispatch(changeMessageAC(message))
//     }
//
//
//     return (
//         <Dialogs addMessage={addMessage}
//                  changeMessageText={changeMessageText}
//                  newMessageText={state.dialogsReducer.newMessageText}
//                  contacts={state.dialogsReducer.contacts}
//                  messages={state.dialogsReducer.messages}
//         />
//     );
// }
