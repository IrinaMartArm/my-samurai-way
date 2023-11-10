import styled from "styled-components";
import React from "react";
import { Post } from "./Post";
import {ActionType, addPostAC, changePostAC, PostsType} from "../../../../state";
import {Button} from "../../../../components/Button";
import {TextAria} from "../../../../components/TextAria";



export type PropsType = {
    posts: PostsType
    // addPost: (post: string) => void
    newPostText: string
    // updateNewPostText: (post: string) => void
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<PropsType> = (props: PropsType) => {

    let postElements = props.posts.map(p => <Post key={p.id} mess={p.post} likes={p.likes}/> )

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onChangeHandler = (post: string) => {
        props.dispatch(changePostAC(post))
    }

    return (
        <>
            <Box>
                    <h2>My posts</h2> 
                    <TextAria  value={props.newPostText} onChange={onChangeHandler}/>
                    <Button onClick={addPost} name={'Add Post'}/>
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

// const Field = styled.input`
//     width: 500px;
//     height: 50px;
//     margin: 20px 0;
//     color: ${Theme.colors.white};
//     border: 1px solid ${Theme.colors.border};
//     background-color: ${Theme.colors.primary};
//     &:focus-visible {
//         outline: 1.5px solid ${Theme.colors.border};
//     }
// `;