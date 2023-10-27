import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myposts/MyPosts";
import a from "../../../assets/images/IMG_3719 1 2.png";
import styled from "styled-components";
import {PostsType} from "../../../state";


type PropsType = {
  posts: PostsType
}
  


export const ProfilePage: React.FC<PropsType> = (props: PropsType) => {
  const {posts} = props

  return (
    <div>
      <Box>
        <img src={a} alt="" />
      </Box>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  );
};

const Box = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
`;
