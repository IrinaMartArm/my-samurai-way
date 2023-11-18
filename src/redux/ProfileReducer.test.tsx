import {v1} from "uuid";
import {addPostAC, changePostAC, ProfilePageType} from "./state";
import {ProfileReducer} from "./ProfileReducer";

test('should add Post', () => {


    const startState: ProfilePageType =  {
        posts: [
            {id: v1(), post: 'hi', likes: 28},
            {id: v1(), post: 'hello', likes: 28},
            {id: v1(), post: 'yo', likes: 28},
        ],
        newPostText: '',
    }

    const endState = ProfileReducer(startState, addPostAC())

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].post).toBe(endState.newPostText)
})
test('should Change PostText', () => {


    const startState: ProfilePageType =  {
        posts: [
            {id: v1(), post: 'hi', likes: 28},
            {id: v1(), post: 'hello', likes: 28},
            {id: v1(), post: 'yo', likes: 28},
        ],
        newPostText: '',
    }

    const endState = ProfileReducer(startState, changePostAC(startState.newPostText))

    expect(endState.newPostText).toBe(endState.newPostText)
})

