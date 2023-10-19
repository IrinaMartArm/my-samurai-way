import { S } from "./StyledDialogs"

type PropsType = {
    text: string
}

export const Messages = (props:  PropsType) => {
    const {text} = props

    return (
        <S.DialogItems>{text}</S.DialogItems>
    )
}
