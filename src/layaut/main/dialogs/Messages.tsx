import { S } from "./StyledDialogs"

type PropsType = {
    id: string
    text: string
}

export const Messages = (props:  PropsType) => {
    const {id, text} = props

    return (
        <S.DialogList id={id}>{text}</S.DialogList>
    )
}
