import styled from "styled-components";
import React from "react";
import { Post } from "./Post";
import {Button} from "../../../../components/Button";
import {PostType} from "../../../../redux/ProfileReducer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";



export const MyPosts = (props: PropsType) => {

    const {posts, addPost} = props

    let postElements = posts.map(p =>
        <Post key={p.id} mess={p.post} likes={p.likes}/> )

    const onAddPost = (formData: FormData) => {
        addPost(formData.newPostText)
    }

    return (
        <>
            <AddPostFormRedux onSubmit={onAddPost}/>
            {postElements}
        </>
    );
}






export const AddPostForm: React.FC<InjectedFormProps<FormData>> = (props) => {

    const style = {
        backgroundColor: 'transparent',
        padding: '3px',
        height: '50px',
    }
    const box = {
        display: 'grid',
        gap: "15px",
        padding: '20px'
    }

    return (
        <Form style={box}>
            <Field name='newPostText'
                   component='textarea'
                   placeholder='Enter your post'
                   style={style}
            />
            <Button onClick={()=>{}} name={'Add Post'}/>
        </Form>
    )
}

const AddPostFormRedux = reduxForm<FormData>({
    form: 'profileAddPostForm'
})(AddPostForm)



export type PropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}
type FormData = {
    newPostText: string
}
