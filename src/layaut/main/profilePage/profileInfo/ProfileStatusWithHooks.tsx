import {Input2} from "../../../../components/Input";
import React, {useEffect, useState} from "react";

export const ProfileStatusWithHooks = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.changeStatus(status)
    }
    const onStatusChangeHandler = (value: string) => {
        setStatus(value)
    }

        return (
            <>
                {!editMode &&
                    <div onDoubleClick={activateEditMode}>Status:  {props.status}</div>}
                {editMode &&
                    <Input2 value={status}
                           autoFocus={true}
                           onBlur={deActivateEditMode}
                           setValue={onStatusChangeHandler}
                    />}
            </>
        )
}

type PropsType = {
    status: string
    changeStatus: (status: string) => void
}