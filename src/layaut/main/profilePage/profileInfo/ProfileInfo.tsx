import React, {useState} from "react";
import styled from "styled-components";
import {UserProfile} from "../ProfileReducer";
import {Preloader} from "../../../../components/Preloader";
import {ProfileInfoForm} from "./ProfileForm";
import {ProfileInfoData} from "./ProfileInfoData";


type PropsType = {
	profile: UserProfile
	status: string
	isOwner: boolean
	savePhoto: (file: File) => void
	changeStatus: (status: string) => void
	saveProfile: (formData: UserProfile) => Promise<void>
}

export const ProfileInfo = (props: PropsType) => {

	let {profile, status, changeStatus, isOwner, savePhoto, saveProfile} = props
	const [editMode, setEditMode] = useState(false)

	const handleSubmitll = (formData: UserProfile) => {
		saveProfile(formData)
			.then(() => setEditMode(false))
	}

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<>
			<ProfileInformation>
				{!editMode ? <ProfileInfoData profile={profile}
											  isOwner={isOwner}
											  status={status}
											  setEditMode={setEditMode}
											  changeStatus={changeStatus}
					/>
					: <ProfileInfoForm profile={profile}
									   isOwner={isOwner}
									   status={status}
									   onSubmit={handleSubmitll}
									   initialValues={profile}
									   savePhoto={savePhoto}
									   changeStatus={changeStatus}
					/>
				}
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