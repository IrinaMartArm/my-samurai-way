import React from "react";

type ContactsType = {
	title: string
	value: string
}

export const Contacts = ({title, value}: ContactsType) => {
	return (
		<div><b>{title}</b>: {value}</div>
	)
}