import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";
import {UserProfile} from "../../../redux/ProfileReducer";


type PropsType = {
    profile: UserProfile
}

export const ProfilePage = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};
