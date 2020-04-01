import React, { Component } from "react";
import { List } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";
import {Link} from "react-router-dom";

export default class SubItem extends Component {
    remove = () => {
        this.props.removeItem(this.props.item);
    };

    edit = () => {
        this.props.editItem(this.props.item);
    };

    render() {
        let url = "/item/" + this.props.item.id;
        return (
            <List.Item
                className="sub-item"
                actions={[
                    <EditItem onEdit={this.edit} />,
                    <RemoveItem onRemove={this.remove} />
                ]}
            >
                <Link to={url}>{this.props.item.title}</Link>
            </List.Item>
        );
    }
}