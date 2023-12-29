import { ChangeEvent } from "react";
import React from "react";
import styled from "styled-components";

type PropsType = {
    input: object
    meta: {
        error: string
    }
    value: string
    onBlur?: () => void
    autoFocus?: boolean
}

export const Input: React.FC<PropsType> = ({input, meta, ...props}) => {

    return (
        <>
            <input type="text"
                   value={props.value}
                   onBlur={props.onBlur}
                   autoFocus={props.autoFocus}
            />
            {meta.error && <Error>{meta.error}</Error>}
        </>
    );
}

const Error = styled.div`
    color: red;
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