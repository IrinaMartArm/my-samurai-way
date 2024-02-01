import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {UserProfile} from "../ProfileReducer";
import {Preloader} from "../../../../components/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from './../../../../assets/images/585e4beacb11b227491c3399.png'
import {Button2} from "../../../../components/Button";
import {ProfileInfoForm} from "./ProfileForm";
import {Field} from "redux-form";
import {Input} from "../../../../components/Input";

type PropsType = {
	profile: UserProfile
	status: string
	isOwner: boolean
	savePhoto: (file: File) => void
	changeStatus: (status: string) => void
	saveProfile: (formData: UserProfile) => void
}

type ProfileInfoDataType = {
	profile: UserProfile
	isOwner: boolean
	setEditMode?: (editMode: boolean) => void
}

type ContactsType = {
	title: string
	value: string
}
export const ProfileInfo = (props: PropsType) => {

	let {profile, status, changeStatus, isOwner, savePhoto, saveProfile} = props
	const [editMode, setEditMode] = useState(false)

	const onSelectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			props.savePhoto(e.target.files[0])
		}
	}
	const handleSubmitll = (formData: UserProfile) => {
		saveProfile(formData)
	}

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<>
			<ProfileInformation>
				<div>
					<img src={profile?.photos?.small || userPhoto} alt={''}/>
					{isOwner && <input type={'file'} onChange={onSelectPhoto}/>}

					<ProfileStatus status={status} changeStatus={changeStatus}/>
				</div>
				{!editMode ? <ProfileInfoData profile={profile}
											  isOwner={isOwner}
											  setEditMode={setEditMode}
					/>
					: <ProfileInfoForm profile={profile}
									   onSubmit={handleSubmitll}
									   initialValues={profile}
					/>
				}
			</ProfileInformation>
		</>
	);
};

export const ProfileInfoData = (props: ProfileInfoDataType) => {
	let {profile, isOwner, setEditMode} = props
	// const onSelectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.files?.length) {
	// 		props.savePhoto(e.target.files[0])
	// 	}
	// }
	const editModeHandler = () => {
		if (setEditMode) {
			setEditMode(true)
		}
	}

	return (
		<>
			{/*<div>*/}
			{/*	<img src={profile.photos.small || userPhoto} alt={''}/>*/}
			{/*	{isOwner && <input type={'file'} onChange={onSelectPhoto}/>}*/}
				<div>{profile.fullName}</div>
			{/*</div>*/}

			<div>
				<div>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
				<div>{profile.lookingForAJobDescription}</div>
				{/*<ProfileStatus status={status} changeStatus={changeStatus}/>*/}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map((el => {
				return <Contacts key={el} title={el} value={''}/>
			}))}
			</div>
			{isOwner && <Button2 onClick={editModeHandler} name={'edit'}/>}
		</>
	)
}





export const Contacts = ({title, value}: ContactsType) => {
	return (
		<div><b>{title}</b>: {value}</div>
	)
}

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