import {Btn, Btn2} from "./_Btn";

type PropsType = {
    name: string
    onClick: ()=> void
    disabled?: boolean
}

export const Button = (props: PropsType) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <Btn onClick={handler} disabled={props.disabled}>{props.name}</Btn>
    );
}
export const Button2 = (props: PropsType) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <Btn2 onClick={handler} disabled={props.disabled}>{props.name}</Btn2>
    );
}