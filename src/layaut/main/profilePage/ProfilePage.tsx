import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";
import {UserProfile} from "../../../redux/ProfileReducer";


type PropsType = {
    profile: UserProfile
}

export const ProfilePage = ({profile}: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={profile}/>
      <MyPostsContainer/>
    </div>
  );
};
