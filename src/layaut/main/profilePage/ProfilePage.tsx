import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { MyPosts } from "./myposts/MyPosts";
import a from "../../../assets/images/IMG_3719 1 2.png";
import styled from "styled-components";
import {ActionType, PostsType} from "../../../state";


type PropsType = {
    posts: PostsType
    // addPost: (post: string) => void
    addPost: (post: string) => void
    newPostText: string
    updateNewPostText: (post: string) => void
    dispatch: (action: ActionType) => void
}
export const ProfilePage: React.FC<PropsType> = (props: PropsType) => {
  const {posts , addPost, updateNewPostText, newPostText, dispatch} = props

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}
               addPost={addPost}
               newPostText={newPostText}
               updateNewPostText={updateNewPostText}
               dispatch={dispatch}
      />
    </div>
  );
};

// const Box = styled.div`
//   img {
//     width: 100%;
//     height: 150px;
//   }
// `;
