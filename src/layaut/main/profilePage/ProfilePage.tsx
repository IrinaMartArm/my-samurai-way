import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";
import {UserProfile} from "../../../redux/ProfileReducer";


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
