import styled from "styled-components";
import React from "react";
import { Post } from "./Post";
import {Button} from "../../../../components/Button";
import {TextAria} from "../../../../components/TextAria";
import {PostType} from "../../../../redux/ProfileReducer";



export type PropsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    changePost: (post: string) => void
}

export const MyPosts: React.FC<PropsType> = (props: PropsType) => {

    const {posts, addPost, changePost, newPostText} = props

    let postElements = posts.map(p => <Post key={p.id} mess={p.post} likes={p.likes}/> )

    const onAddPost = () => {
        addPost()
    }

    const onChangeHandler = (post: string) => {
        changePost(post)
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
