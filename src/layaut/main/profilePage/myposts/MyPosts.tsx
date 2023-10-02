
import { Button } from "../../../../components/Button"
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import React from "react";
import { Post } from "./Post";

export const MyPosts: React.FC = () => {
    return (  
        <>
            <Box>
                    <h2>My posts</h2> 
                    <Field as={"textarea"} />
                    <Button>Add Post</Button> 
            </Box> 
            <Post mess="hi" liks={27}/> 
            <Post mess="hello" liks={58}/> 
            <Post mess="yoyo"/> 
        </>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Field = styled.input`
    width: 500px;
    height: 50px;
    margin: 20px 0;
    color: ${Theme.colors.white};
    border: 1px solid ${Theme.colors.border};
    background-color: ${Theme.colors.primary};
    &:focus-visible {
        outline: 1.5px solid ${Theme.colors.border};
    }
`;