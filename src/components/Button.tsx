import {_Btn} from "./_Btn";

type PropsType = {
    name: string
    onClick: ()=> void
}

export const Button = (props: PropsType) => {
    const handler = () => {
        props.onClick()
    }
    return (
        <_Btn onClick={handler}>{props.name}</_Btn>
    );
}
