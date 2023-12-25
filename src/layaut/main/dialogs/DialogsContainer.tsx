import {RootStateType} from "../../../redux/Store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {
    addMessageAC,
    ContactType,
    DialogsReducerActionType,
    MessagesType
} from "../../../redux/DialogsReducer";
import {WithAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import React, {ComponentType} from "react";
import {RouteComponentProps} from "react-router-dom";


class DialogsContainer extends React.Component<PropsType>{
    render() {
        return <Dialogs {...this.props}
            addMessage={this.props.addMessage} messages={this.props.messages} contacts={this.props.contacts}
        />;
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        messages: state.dialogsReducer.messages,
        contacts: state.dialogsReducer.contacts
    }
}
let mapDispatchToProps = (dispatch: (action: DialogsReducerActionType) => void) => {
    return {
        addMessage: (message: string) => {dispatch(addMessageAC(message))},
    }
}



export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(DialogsContainer)




type MapStateToPropsType = {
    messages: MessagesType[]
    contacts: ContactType[]
}
type MapDispatchToPropsType = {
    addMessage: () => void
}
type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = DialogsPropsType & RouteComponentProps





// const RedirectComponent = WithAuthRedirect(Dialogs)
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent)
// type PropsType = MapDispatchToPropsType & MapStateToPropsType

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
