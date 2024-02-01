import React, {FC} from "react";
import {CreateField} from "../../../../common/CreateField";
import {Input} from "../../../../components/Input";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextAria} from "../../../../components/TextAria";
import {UserProfile} from "../ProfileReducer";
import {Button} from "../../../../components/Button";


type ProfileFormType = {
	profile: UserProfile

}

const ProfileForm: FC<InjectedFormProps<UserProfile, ProfileFormType>  &   ProfileFormType> = (props) => {
	let {handleSubmit} = props


	return (
		<form onSubmit={handleSubmit}>
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
			{/*<div>*/}
			{/*	<b>Contacts</b>: {Object.keys(profile.contacts).map((el => {*/}
			{/*	return <Contacts key={el} title={el} value={''}/>*/}
			{/*}))}*/}
			{/*</div>*/}
			<Button name={'save'}/>
		</form>
	)
}
export const ProfileInfoForm = reduxForm<UserProfile, ProfileFormType>({
	form: 'profileInfoForm'
})(ProfileForm)