import {Btn} from "./_Btn";

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
        <Btn onClick={handler}>{props.name}</Btn>
    );
}
