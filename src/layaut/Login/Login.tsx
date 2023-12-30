import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Button} from "../../components/Button";
import styled from "styled-components";
import {Input} from "../../components/Input";
import {required} from "../../Utils/Validators";
import {connect} from "react-redux";
import {LoginTC} from "./AuthReducer";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/Store";


const LoginForm: React.FC<InjectedFormProps<FormData>> = (props) => {
    return (
        <StyledForm onSubmit={props.handleSubmit}>
            <label>
                Email
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </label>
            <label>
                Password
                <Field type='password'
                       placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </label>
            <div></div>
            <label>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/>
                Remember me
            </label>
            <Button name={'Login'} disabled={false}/>
        </StyledForm>
    )
}


const LoginReduxForm = reduxForm<FormData>({
    form: 'login'
})(LoginForm)


const Login = (props: LoginProps) => {
    const onSubmit = (formData: FormData) => {
        props.LoginTC(formData)
    }
    if(props.isAuth) {
        return <Redirect to={"/users"}/>
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.authReducer.isAuth
})
const mapDispatchToProps: MapDispatchToPropsType = {LoginTC}
export default connect(mapStateToProps, mapDispatchToProps)(Login)



type MapStateToProps = {
    isAuth: boolean}

type MapDispatchToPropsType = {
    LoginTC: any
}
type LoginProps = MapStateToProps & MapDispatchToPropsType





export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    justify-content: space-between;
    width: 150px;
    margin: 30px auto;
    height: 200px;
      & button {
        margin: 1px auto;
      }
`