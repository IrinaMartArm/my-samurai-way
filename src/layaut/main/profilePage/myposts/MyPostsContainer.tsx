import styled from "styled-components";
import React from "react";
import { Post } from "./Post";
import {ActionType, addPostAC, changePostAC, PostsType} from "../../../../redux/state";
import {Button} from "../../../../components/Button";
import {TextAria} from "../../../../components/TextAria";
import {MyPosts} from "./MyPosts";



export type PropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPostsContainer: React.FC<PropsType> = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const updatePostText = (post: string) => {
        props.dispatch(changePostAC(post))
    }

    return (
        <MyPosts posts={props.posts} addPost={addPost} newPostText={props.newPostText} updatePostText={updatePostText}/>
    );
}
//
// const Box = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
// `;
