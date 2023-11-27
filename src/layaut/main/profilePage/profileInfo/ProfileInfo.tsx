import React from "react";
import i from "../../../../assets/images/Снимок-9-24-23-в-20.23.webp"
import styled from "styled-components";

export const ProfileInfo: React.FC = () => {
    return (
            <MyProfile>
                <img src={i} alt="MyPhoto"/>
                <div></div>
            </MyProfile>        
    );
};


const MyProfile = styled.div`
    padding: 20px;
        img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
`