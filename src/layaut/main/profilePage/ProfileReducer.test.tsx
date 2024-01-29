import {v1} from "uuid";
import {addPost, ProfilePageType, ProfileReducer, removePost} from "./ProfileReducer";

let startState: ProfilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: '1', post: 'hi', likes: 28},
            {id: v1(), post: 'hello', likes: 28},
            {id: v1(), post: 'yo', likes: 28},
        ],
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
    let post = 'hello'
    const endState = ProfileReducer(startState, addPost(post))

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].post).toBe(post)
})
test('Post should be deleted', () => {

    const endState = ProfileReducer(startState, removePost('1'))

    expect(endState.posts.length).toBe(2)

})
