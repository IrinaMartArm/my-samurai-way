import React from "react";
import { Profile } from "./profile/Profile";
import { MyPosts } from "./myposts/MyPosts";
import a from "../../../assets/images/aleksandr-eremin-QfHmrIUN9G0-unsplash.jpg";
import styled from "styled-components";

export const ProfilePage: React.FC = () => {
    return ( 
        <div>
            <Box>
                <img src={a} alt="" />
            </Box>
            <Profile/>
            <MyPosts/>
        </div> 
    );
}

const Box = styled.div`
    img {
            width: 100%;
            height: 150px;
        }
`