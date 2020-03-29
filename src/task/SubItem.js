import React, { Component } from "react";
import { List } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";

export default class SubItem extends Component {
    remove = () => {
        this.props.removeItem(this.props.item);
    };

    edit = () => {
        this.props.editItem(this.props.item);
    };

    render() {
        return (
            <List.Item
                actions={[
                    <EditItem onEdit={this.edit} />,
                    <RemoveItem onRemove={this.remove} />
                ]}
            >
                {this.props.item.title}
            </List.Item>
        );
    }
}