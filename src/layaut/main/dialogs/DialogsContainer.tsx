
import {ActionType, addMessageAC, changeMessageAC} from "../../../redux/state";
import {RootStateType} from "../../../redux/Store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";


let mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText,
            contacts: state.dialogsReducer.contacts
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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
