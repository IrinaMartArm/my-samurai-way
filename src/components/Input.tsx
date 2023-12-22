import { ChangeEvent } from "react";
import React from "react";

type PropsType = {
    value: string
    onBlur?: () => void
    autoFocus?: boolean
    setValue: (value: string) => void
}

export const Input: React.FC<PropsType> = (props: PropsType) => {

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