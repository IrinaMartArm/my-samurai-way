import { NavLink } from "react-router-dom"
import { S } from "./StyledDialogs"

type PropsType = {
    id: string
    name: string
}

export const DialogItem = (props: PropsType) => {

    const {id, name} = props
    const path = "/dialogs/" + id

    return (
        <S.DialogItem><NavLink to={path}>{name}</NavLink></S.DialogItem>
    )
}