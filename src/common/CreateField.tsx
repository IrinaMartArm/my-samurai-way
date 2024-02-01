import {Field} from "redux-form";
import * as React from "react";
import {ReactNode} from "react";

type PropsType = {
	placeholder: string
	name: string
	validators: any
	component: any
	text: string
}
type TextAriaProps = {
	input: object
	meta: {
		error: string
		touched: boolean
		active: boolean
	}
};

let ErrorMessage = 'Error'
// const FormControl = (props: any) => {
// 	const {input, meta, children, ...restProps} = props
// 	const hasError = meta.active && meta.error && meta.touched
// 	return (
// 		<div>
// 			<div>
// 				{children}
// 			</div>
// 			{ hasError && <span>{meta.error}</span>}
// 		</div>
// 	)
// }

// export const TextAria: React.FC<TextAriaProps> = (props: any) =>{
// 	const {input, meta, ...restProps} = props
// 	return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
// };

// export const BigInput = (props: any) => {
// 	const {input, meta, child, ...restProps} = props
// 	return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
// }
export const CreateField = ( placeholder:string, name:string, validators:any, component:ReactNode, props:any= {}, text:string= '') =>
	(
		<div>
			<Field placeholder={placeholder}
				   name={name}
				   validate={validators}
				   component={component}
				   {...props}
			/>
			{text}
		</div>
	)


