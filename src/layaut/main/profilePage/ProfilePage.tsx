import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myposts/MyPosts";
import a from "../../../assets/images/IMG_3719 1 2.png";
import styled from "styled-components";
import {PostsType} from "../../../state";

type PropsType = {
    posts: PostsType
    addPost: (post: string) => void
}
export const ProfilePage: React.FC<PropsType> = (props: PropsType) => {
  const {posts , addPost} = props

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost}/>
    </div>
  );
};

// const Box = styled.div`
//   img {
//     width: 100%;
//     height: 150px;
//   }
// `;
