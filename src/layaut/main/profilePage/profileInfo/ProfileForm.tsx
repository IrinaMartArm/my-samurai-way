import React, {ChangeEvent, FC} from "react";
import {CreateField} from "../../../../common/CreateField";
import {Input} from "../../../../components/Input";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextAria} from "../../../../components/TextAria";
import {UserProfile} from "../ProfileReducer";
import {Button} from "../../../../components/Button";
import userPhoto from "../../../../assets/images/585e4beacb11b227491c3399.png";
import {ProfileStatus} from "./ProfileStatus";


type ProfileFormType = {
	profile: UserProfile
	isOwner: boolean
	status: string
	savePhoto: (file: File) => void
	changeStatus: (status: string) => void
}

const ProfileForm: FC<InjectedFormProps<UserProfile, ProfileFormType> & ProfileFormType> = (props) => {
	let {handleSubmit, profile, status, savePhoto, changeStatus} = props
	const onSelectPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<img src={profile?.photos?.small || userPhoto} alt={''}/>
				<input type={'file'} onChange={onSelectPhoto}/>

				<ProfileStatus status={status} changeStatus={changeStatus}/>
			</div>
			<div>
				<div>
					<Field name='fullName'
						   component={Input}
						   placeholder='Full name'

					/>
				</div>
				<div>
					<b>Looking for a job:</b>
					{CreateField(
						'', 'LookingForAJob', [], Input, {type: 'checkbox'}
					)}
				</div>
				<div>
					<b>Description :</b>
					{CreateField(
						'My professional skills', 'LookingForAJobDescription', [], TextAria
					)}
				</div>
				<div>
					<b>About me:</b>
					{CreateField(
						'About me', 'AboutMe', [], TextAria
					)}
				</div>
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map((el => {
				return <div><b>{el}</b>: {CreateField(
					el, 'contacts.' + el, [], Input
				)}</div>
			}))}
				<div>
					{props.error && <div>{props.error}</div>}
				</div>
			</div>
			<Button name={'save'}/>
		</form>
	)
}
export const ProfileInfoForm = reduxForm<UserProfile, ProfileFormType>({
	form: 'profileInfoForm'
})(ProfileForm)