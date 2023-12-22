import {Input} from "../../../../components/Input";
import React from "react";

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.changeStatus(this.state.status)
    }
    onStatusChangeHandler = (value: string) => {
        this.setState({status: value})
        console.log(value)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>Status:  {this.props.status}</div>}
                {this.state.editMode &&
                    <Input value={this.state.status}
                           autoFocus={true}
                           onBlur={this.deActivateEditMode}
                           setValue={this.onStatusChangeHandler}
                    />}
            </>
        )
    }
}
type PropsType = {
    status: string
    changeStatus: (status: string) => void
}