import {v1} from "uuid";
import {addPost, changePost, ProfilePageType, ProfileReducer} from "./ProfileReducer";

let startState: ProfilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), post: 'hi', likes: 28},
            {id: v1(), post: 'hello', likes: 28},
            {id: v1(), post: 'yo', likes: 28},
        ],
        newPostText: '',
        profile: {
            userId: 'string',
            lookingForAJob: true,
            lookingForAJobDescription: 'string',
            fullName: 'string',
            contacts: {
                github: 'string',
                vk: 'string',
                facebook: 'string',
                instagram: 'string',
                twitter: 'string',
                website: 'string',
                youtube: 'string',
                mainLink: 'string',
            },
            photos: {
                small: 'string',
                large: 'string'
            }
        },
        status: 'hi'
    }
})
test('should add Post', () => {

    const endState = ProfileReducer(startState, addPost())

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].post).toBe(endState.newPostText)
})
test('should Change PostText', () => {

    const endState = ProfileReducer(startState, changePost(startState.newPostText))

    expect(endState.newPostText).toBe(endState.newPostText)
})

