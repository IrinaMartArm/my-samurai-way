import * as React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme";



type Props = {
    input: object
    meta: {
        error: string
    }
};
let ErrorMessage = 'Error'
export const TextAria: React.FC<Props> = ({input, meta, ...props}) =>{

    return (
        <div>
            <FieldArea {...input} {...props}/>
            {meta.error && <Error>{meta.error}</Error>}
        </div>
    )
};

const FieldArea = styled.textarea`
    width: 500px;
    height: 70px;
    padding: 5px;
    letter-spacing: 0.2px;
    resize: none;
    color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.border};
    background-color: ${Theme.colors.primary};
    &:focus-visible {
        outline: 1.5px solid ${Theme.colors.border};
    }
    &:invalid ~ ${ErrorMessage} {
      border: 1px solid red;
    }
`
const Error = styled.div`
    color: red;
`
