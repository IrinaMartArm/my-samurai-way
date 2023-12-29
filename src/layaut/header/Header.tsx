import React from "react";
import { StyledHeader } from "./StyledHeader";
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    password: string | null
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
