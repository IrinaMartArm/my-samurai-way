import styled from "styled-components";
import i from "../../../../assets/images/Снимок-9-24-23-в-20.23.webp";
import React from "react";
import { type } from "os";

type PostPropsType = {
    mess: string
    liks?: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (  
            <NewPost>
                <img src={i} alt="photo" />
                <div>{props.mess}</div>
                <span>like</span>
                <span>{props.liks}</span>
            </NewPost>
    );
}


const NewPost = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 8fr 1fr 1fr;
    gap: 30px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`
