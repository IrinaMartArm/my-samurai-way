import {Input} from "../../../../components/Input";
import React from "react";

export class ProfileStatus extends React.Component<any> {

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

// let mapStateToProps = () => {
//
// }
// let mapDispatchToProps = {
//
// }