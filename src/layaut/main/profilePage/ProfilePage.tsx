import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {UserProfile} from "./ProfileReducer";
import MyPostsContainer from "./myposts/MyPostsContainer";


type PropsType = {
    profile: UserProfile
    status: string
    isOwner: boolean
    savePhoto: (file: File) => void
    changeStatus: (status: string) => void
}

export const ProfilePage = (props: PropsType) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}
                   isOwner={props.isOwner}
                   status={props.status}
                   changeStatus={props.changeStatus}
                   savePhoto={props.savePhoto}
      />
      <MyPostsContainer/>
    </div>
  );
};
