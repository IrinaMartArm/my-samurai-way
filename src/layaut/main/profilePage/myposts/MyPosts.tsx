import React from "react";
import { Post } from "./Post";
import {Button} from "../../../../components/Button";
import {PostType} from "../ProfileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/Validators";
import {TextAria} from "../../../../components/TextAria";
import {S} from "../../dialogs/StyledDialogs";



export const MyPosts = React.memo((props: PropsType) => {

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
})




const maxLength = maxLengthCreator(50)

export const AddPostForm: React.FC<InjectedFormProps<FormData>> = (props) => {

    return (
        <S.Form onSubmit={props.handleSubmit}>
            <Field name='newPostText'
                   component={TextAria}
                   placeholder='Enter your post'
                   validate={[required, maxLength]}
            />
            <Button name={'Add Post'}/>
        </S.Form>
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
