import {Btn} from "./Btn";

type PropsType = {
    name: string
    onClick: ()=> void
}

export const Button = (props: PropsType) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <Btn onClick={handler}>{props.name}</Btn>
    );
}
