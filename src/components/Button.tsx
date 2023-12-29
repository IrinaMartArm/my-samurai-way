import {Btn, Btn2} from "./_Btn";

type PropsType = {
    name: string
    disabled?: boolean
}
type PropsType2 = {
    name: string
    disabled?: boolean
    onClick: () => void
}

export const Button = (props: PropsType) => {
    return (
        <Btn disabled={props.disabled}>{props.name}</Btn>
    );
}
export const ButtonA = (props: PropsType) => {
    return (
        <Btn2 disabled={props.disabled}>{props.name}</Btn2>
    );
}
export const Button2a = (props: PropsType2) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <Btn2 onClick={handler} disabled={props.disabled}>{props.name}</Btn2>
    );
}
export const Button2 = (props: PropsType2) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <Btn onClick={handler} disabled={props.disabled}>{props.name}</Btn>
    );
}