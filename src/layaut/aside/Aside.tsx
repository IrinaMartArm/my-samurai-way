import React from "react";
import { StyledAside } from "./StyledAside";

export const Aside: React.FC = () => {
    return (  
        <StyledAside>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </StyledAside>
    );
}
