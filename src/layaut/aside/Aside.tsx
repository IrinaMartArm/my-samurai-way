import React from "react";
import { StyledAside } from "./StyledAside";

export const Aside: React.FC = () => {
    return (  
        <StyledAside>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </StyledAside>
    );
}
