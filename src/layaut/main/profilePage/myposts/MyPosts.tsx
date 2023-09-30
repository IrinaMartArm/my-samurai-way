
import { Button } from "../../../../components/Button"
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import React from "react";

export const MyPosts: React.FC = () => {
    return (  
        <Boxx>
                <h2>My posts</h2> 
                <Field as={"textarea"} />
                <Button>send</Button> 
        </Boxx>       
    );
}

const Boxx = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Field = styled.input`
    width: 500px;
    height: 50px;
    margin: 20px 0;
    border: 1px solid ${Theme.colors.border};
    background-color: ${Theme.colors.primary};
`;