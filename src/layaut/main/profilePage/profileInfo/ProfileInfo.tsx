import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {UserProfile} from "../ProfileReducer";
import {Preloader} from "../../../../components/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from './../../../../assets/images/585e4beacb11b227491c3399.png'

type PropsType = {
	profile: UserProfile
	status: string
	isOwner: boolean
	savePhoto: (file: File) => void
	changeStatus: (status: string) => void
}
export const ProfileInfo = (props: PropsType) => {
	let {profile, status, changeStatus} = props
	if (!props.profile) {
		return <Preloader/>
	}
	const onSelectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			props.savePhoto(e.target.files[0])
		}
	}

	return (
		<>
			<ProfileInformation>
				<div>
					<div>{profile.lookingForAJob}</div>
					<div>{profile.lookingForAJobDescription}</div>
					<ProfileStatus status={status} changeStatus={changeStatus}/>
				</div>
				<div>
					<img src={profile.photos.small || userPhoto} alt={profile.fullName}/>
					{!props.isOwner && <input type={'file'} onChange={onSelectPhoto}/>}
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