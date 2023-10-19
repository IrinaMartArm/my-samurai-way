import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myposts/MyPosts";
import a from "../../../assets/images/aleksandr-eremin-QfHmrIUN9G0-unsplash.jpg";
import styled from "styled-components";

export const ProfilePage: React.FC = () => {
  return (
    <div>
      <Box>
        <img src={a} alt="" />
      </Box>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

const Box = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
`;
