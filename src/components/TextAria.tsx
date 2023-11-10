// @flow
import * as React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {ChangeEvent} from "react";
// import {ActionType} from "../state";

type Props = {
    value: string
    onChange: (value: string) => void
    // onChange: (action: ActionType) => void
};

export const TextAria: React.FC<Props> = (props: Props) =>{

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
            <FieldArea onChange={onChangeHandler}
                       value={props.value}/>
            );
};

const FieldArea = styled.textarea`
    width: 500px;
    height: 50px;
    padding: 3px;
    color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.border};
    background-color: ${Theme.colors.primary};
    &:focus-visible {
        outline: 1.5px solid ${Theme.colors.border};
    }
`;