import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import React from "react";
import { ProfilePage } from "./profilePage/ProfilePage";


export const Main: React.FC = () => {
    return (  
        <StyledMain>
            <ProfilePage/>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    background-color: ${Theme.colors.primary};
    grid-area: m;
`