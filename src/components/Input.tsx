import { ChangeEvent } from "react";
import React from "react";
import styled from "styled-components";

type PropsType = {
    input: object
    meta: {
        error: string
        touched: boolean
    }
    value: string
    onBlur?: () => void
    autoFocus?: boolean
}

export const Input: React.FC<PropsType> = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <>
            <StyledInput type="text"
                         {...input} {...props}
                   value={props.value}
                   onBlur={props.onBlur}
                   autoFocus={props.autoFocus}
            />
            {hasError && <Error>{meta.error}</Error>}
        </>
    );
}

const Error = styled.div`
    color: red;
`
const StyledInput = styled.input`
  
`




type PropsType2 = {
    value: string
    onBlur?: () => void
    autoFocus?: boolean
    setValue: (value: string) => void
}
export const Input2: React.FC<PropsType2> = (props: PropsType2) => {

    const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }

    return (
        <input type="text"
               value={props.value}
               onChange={textHandler}
               onBlur={props.onBlur}
               autoFocus={props.autoFocus}
        />
    );
}