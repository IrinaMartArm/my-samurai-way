
import React from "react";
import {ActionType, addPostAC, changePostAC} from "../../../../redux/state";
import {MyPosts} from "./MyPosts";
import {StoreAppType} from "../../../../redux/Store";



export type PropsType = {
    store: StoreAppType
    dispatch: (action: ActionType) => void
}

export const MyPostsContainer: React.FC<PropsType> = (props: PropsType) => {

    const state = props.store.getState()
    const addPost = () => {
        props.dispatch(addPostAC(state.profileReducer.newPostText))
    }

    const updatePostText = (post: string) => {
        props.dispatch(changePostAC(post))
    }

    return (
        <MyPosts posts={state.profileReducer.posts} addPost={addPost} newPostText={state.profileReducer.newPostText} updatePostText={updatePostText}/>
    );
}
