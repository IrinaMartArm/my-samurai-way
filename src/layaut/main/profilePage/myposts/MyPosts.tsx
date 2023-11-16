import styled from "styled-components";
import React from "react";
import { Post } from "./Post";
import {PostsType} from "../../../../redux/state";
import {Button} from "../../../../components/Button";
import {TextAria} from "../../../../components/TextAria";



export type PropsType = {
    posts: PostsType
    addPost: () => void
    newPostText: string
    updatePostText: (post: string) => void
}

export const MyPosts: React.FC<PropsType> = (props: PropsType) => {

    const {posts, addPost, updatePostText, newPostText} = props

    let postElements = posts.map(p => <Post key={p.id} mess={p.post} likes={p.likes}/> )

    const onAddPost = () => {
        addPost()
    }

    const onChangeHandler = (post: string) => {
        updatePostText(post)
    }

    return (
        <>
            <Box>
                    <h2>My posts</h2> 
                    <TextAria  value={newPostText} onChange={onChangeHandler}/>
                    <Button onClick={onAddPost} name={'Add Post'}/>
            </Box>
            {postElements}

        </>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
