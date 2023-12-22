import React from "react";
import styled from "styled-components";
import {UserProfile} from "../../../../redux/ProfileReducer";
import {Preloader} from "../../../../components/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: UserProfile
    status: string
    changeStatus: (status: string) => void
}
export const ProfileInfo = (props: PropsType) => {
    let {profile, status, changeStatus} = props
    if(!props.profile) {
        return <Preloader/>
    }
    return (
       <>
           {/*{!props.profile ? <Preloader/> :*/}
               <ProfileInformation>
                       <div>
                           <div>{profile.lookingForAJob}</div>
                           <div>{profile.lookingForAJobDescription}</div>
                           <ProfileStatus status={status} changeStatus={changeStatus}/>
                       </div>
                       <div>
                           <img src={profile.photos.small} alt={profile.fullName}/>
                           <div>{profile.fullName}</div>

                       </div>
                       <div>
                           <div>{profile.contacts.facebook}</div>
                           <div>{profile.contacts.github}</div>
                           <div>{profile.contacts.vk}</div>
                           <div>{profile.contacts.twitter}</div>
                           <div>{profile.contacts.mainLink}</div>
                           <div>{profile.contacts.website}</div>
                           <div>{profile.contacts.instagram}</div>
                           <div>{profile.contacts.youtube}</div>
                       </div>
               </ProfileInformation>
           {/*}*/}
       </>
    );
};


const ProfileInformation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
        img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
`