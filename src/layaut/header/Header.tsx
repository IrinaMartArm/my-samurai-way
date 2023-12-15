import React from "react";
import { StyledHeader } from "./StyledHeader";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string
}

export const Header: React.FC <PropsType>= (props: PropsType) => {
    return (  
        <StyledHeader>
            <h1>Hello</h1>
            <div>
                {props.isAuth ? <div>Free</div> :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </StyledHeader>
    );
}
