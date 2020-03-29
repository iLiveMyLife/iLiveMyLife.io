import React, { Component } from "react";
import { EditFilled } from '@ant-design/icons';

export default class EditItem extends Component {
    edit = () => {
        this.props.onEdit();
    };

    render() {
        return (
            <EditFilled onClick={this.edit} />
        );
    }
}