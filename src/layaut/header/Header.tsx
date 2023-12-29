import React from "react";
import { StyledHeader } from "./StyledHeader";
import {NavLink} from "react-router-dom";
import {Button2a} from "../../components/Button";



type PropsType = {
    isAuth: boolean
    password: string | null
    LogoutTC: () => void
}

export const Header: React.FC <PropsType>= (props: PropsType) => {

    return (  
        <StyledHeader>
            <h1>Hello</h1>
            <div>
                {props.isAuth ? <Button2a name={'LogOut'} onClick={props.LogoutTC}/> :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </StyledHeader>
    );
}
