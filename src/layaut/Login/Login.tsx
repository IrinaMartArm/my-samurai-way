import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Button} from "../../components/Button";
import styled from "styled-components";
import {Input} from "../../components/Input";


type FormData = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    return (
        <StyledForm onSubmit={props.handleSubmit}>
            <label>
                Email
                <Field placeholder={'Email'} name={'email'} component={Input}/>
            </label>
            <label>
                Password
                <Field placeholder={'Password'} name={'password'} component={Input}/>
            </label>
            <label>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/>
                Remember me
            </label>
            <Button name={'Login'} disabled={false}/>
        </StyledForm>
    )
}

const LoginReduxForm = reduxForm<FormData>({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormData) => {
        console.log(formData)
    }
    return (
        <div>
            {/*<h1>Login</h1>*/}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    //border: 1px solid red;
    align-items: start;
    justify-content: space-between;
    width: 150px;
    margin: 30px auto;
    height: 200px;
      & button {
        margin: 1px auto;
      }
`