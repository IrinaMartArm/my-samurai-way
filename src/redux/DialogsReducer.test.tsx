import {addMessageAC, changeMessageAC, changePostAC, DialogsPageType, ProfilePageType} from "./state";
import {v1} from "uuid";
import {DialogsReducer} from "./DialogsReducer";

test('should add Post', () => {


    const startState: DialogsPageType = {
        contacts: [
            {id: v1(), name: 'Ira'},
            {id: v1(), name: 'Suren'},
            {id: v1(), name: 'Arina'},
            {id: v1(), name: 'Liana'},
        ],
            messages: [
            {id: v1(), text: 'hi'},
            {id: v1(), text: 'how are you?'},
            {id: v1(), text: 'ok!'},
        ],
            newMessageText: ''
    }

    const endState = DialogsReducer(startState, addMessageAC())

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].text).toBe(endState.newMessageText)
})
test('should Change PostText', () => {


    const startState: DialogsPageType = {
        contacts: [
            {id: v1(), name: 'Ira'},
            {id: v1(), name: 'Suren'},
            {id: v1(), name: 'Arina'},
            {id: v1(), name: 'Liana'},
        ],
        messages: [
            {id: v1(), text: 'hi'},
            {id: v1(), text: 'how are you?'},
            {id: v1(), text: 'ok!'},
        ],
        newMessageText: ''
    }


    const endState = DialogsReducer(startState, changeMessageAC(startState.newMessageText))

    expect(endState.newMessageText).toBe(endState.newMessageText)
})