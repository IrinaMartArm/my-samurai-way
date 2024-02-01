import React from "react";
import { StyledAside } from "./StyledAside";
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../redux/Store";
import {useSelector} from "react-redux";

export const Aside: React.FC = () => {

    const userId = useSelector<RootStateType, number| null>(state=>state.authReducer.id)
    return (  
        <StyledAside >
            <ul>
                <li><NavLink  to={`/profile`}  activeStyle={{ color: ' #252527' }}>Profile</NavLink></li>
                <li><NavLink  to="/dialogs"  activeStyle={{  color: ' #252527' }}>Dialogs</NavLink></li>
                <li><NavLink  to="/users"  activeStyle={{  color: ' #252527' }}>Users</NavLink></li>
                <li><NavLink  to="/news" activeStyle={{ color: ' #252527' }}>News</NavLink></li>
                <li><NavLink  to="/" activeStyle={{  }}>Music</NavLink></li>
                <li><NavLink  to="/" activeStyle={{  }}>Settings</NavLink></li>
            </ul>
        </StyledAside>
    );
}
// color: ${Theme.colors.primary}style={{color: `${location==='/profile' ? 'red': 'black'}`}}