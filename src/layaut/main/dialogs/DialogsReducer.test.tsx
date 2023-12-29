import {addMessageAC, DialogsPageType, DialogsReducer} from "./DialogsReducer";


let startState: DialogsPageType

beforeEach(() => {
    startState = {
        contacts: [
            {id: 1, name: 'Ira'},
            {id: 2, name: 'Suren'},
            {id: 3, name: 'Arina'},
            {id: 4, name: 'Liana'},
        ],
        messages: [
            {id: "1", text: 'hi'},
            {id: '2', text: 'how are you?'},
            {id: '3', text: 'ok!'},
        ],
    }
})
test('should add Post', () => {
    let post = 'hello'

    const endState = DialogsReducer(startState, addMessageAC(post))

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].text).toBe(post)
})
// test('should Change PostText', () => {
//
//     const endState = DialogsReducer(startState, changeMessageAC(startState.newMessageText))
//
//     expect(endState.newMessageText).toBe(endState.newMessageText)
// })