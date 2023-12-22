import {Field, reduxForm} from "redux-form";


const LoginForm = () => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Email
                <Field placeholder={'Email'} name={'email'} component={"input"}/>
            </label>
            <label>
                Password
                <Field placeholder={'Password'} name={'password'} component={"input"}/>
            </label>
            <label>
                <Field type={"checkbox"} name={'rememberMe'} component={"input"}/>
                Remember me
            </label>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props: any) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}
