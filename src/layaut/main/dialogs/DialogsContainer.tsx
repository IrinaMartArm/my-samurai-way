import {RootStateType} from "../../../redux/Store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeMessageAC, DialogsReducerActionType} from "../../../redux/DialogsReducer";


let mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.authReducer.isAuth,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)










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
