

import styled from "styled-components";
import React, { useState} from "react";
import { Post } from "./Post";
import {PostsType} from "../../../../state";
import {Button} from "../../../../components/Button";
import {TextAria} from "../../../../components/TextAria";



export type PropsType = {
    posts: PostsType
    // addPost: (post: string) => void
    addPost: () => void
    updateNewPostText: (post: string) => void
}

export const MyPosts: React.FC<PropsType> = (props: PropsType) => {

    // const [post, setPost] = useState('')
    // const [posts, setPosts] = useState(props.posts)
    // const addPost =  () => {
    //
    //     let newPost = {
    //         id: v1(),
    //         post: post,
    //         likes: 0
    //     }
    //     setPosts([newPost, ...posts])
    //     setPost('')
    // }
    let postElements = props.posts.map(p => <Post key={p.id} mess={p.post} likes={p.likes}/> )

    let newPostEl = React.createRef()
    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostEl.current.value
        props.updateNewPostText(text)
    }


    return (  
        <>
            <Box>
                    <h2>My posts</h2> 
                    <TextAria  value={props.newPostText} onChange={onPostChange} ref={newPostEl}/>
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