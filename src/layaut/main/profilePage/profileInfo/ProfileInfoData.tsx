import userPhoto from "../../../../assets/images/585e4beacb11b227491c3399.png";
import {ProfileStatus} from "./ProfileStatus";
import {Button2} from "../../../../components/Button";
import React from "react";
import {UserProfile} from "../ProfileReducer";
import styled from "styled-components";
import {Contacts} from "./Contacts";

type ProfileInfoDataType = {
	profile: UserProfile
	isOwner: boolean
	status: string
	setEditMode?: (editMode: boolean) => void
	changeStatus: (status: string) => void
}
export const ProfileInfoData = (props: ProfileInfoDataType) => {
	let {profile, isOwner, status, setEditMode, changeStatus} = props
	const editModeHandler = () => {
		if (setEditMode) {
			setEditMode(true)
		}
	}

	return (
		<>
			<NameBlock>
				<img src={profile.photos.small || userPhoto} alt={''}/>
				<div>{profile.fullName}</div>
				<ProfileStatus status={status} changeStatus={changeStatus}/>
			</NameBlock>
			<NameBlock>
				<div>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
				<div>{profile.lookingForAJobDescription}</div>
			</NameBlock>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map((el => {
				return <Contacts key={el} title={el} value={''}/>
			}))}
			</div>
			{isOwner && <Button2 onClick={editModeHandler} name={'edit'}/>}
		</>
	)
}


const NameBlock = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`