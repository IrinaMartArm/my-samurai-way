import {RootStateType} from "../../../redux/Store";

export const getMessages = (state: RootStateType) => state.dialogsReducer.messages;
export const getContacts = (state: RootStateType) => state.dialogsReducer.contacts;
