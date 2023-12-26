import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {UserProfile} from "../../../redux/ProfileReducer";
import MyPostsContainer from "./myposts/MyPostsContainer";


type PropsType = {
    profile: UserProfile
    status: string
    changeStatus: (status: string) => void
}

export const ProfilePage = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   changeStatus={props.changeStatus}
      />
      <MyPostsContainer/>
    </div>
  );
};
