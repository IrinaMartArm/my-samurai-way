import { ChangeEvent } from "react";
import React from "react";

type PropsType = {
    setText: (text: string)=> void
    text: string
}

export const Input: React.FC<PropsType> = (props: PropsType) => {

    const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setText(e.currentTarget.value)
    }

    return (
        <input type="text"
               value={props.text}
               onChange={textHandler}
        />
    );
}