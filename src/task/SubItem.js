import React, { Component } from "react";
import { List } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";
import {Link} from "react-router-dom";
import ItemDetailsPopover from "./ItemDetailsPopover";
export default class SubItem extends Component {
    remove = (mutate) => {
        this.props.removeItem(this.props.indexedItem, mutate);
    };

    edit = () => {
        this.props.editItem(this.props.indexedItem);
    };

    render() {
        const item = this.props.indexedItem.item;
        let url = "/item/" + item.id;
        return (
            <List.Item
                className="sub-item"
                actions={[
                    <EditItem onEdit={this.edit} />,
                    <RemoveItem item={item} onRemove={this.remove} />
                ]}
            >
                <ItemDetailsPopover item={item} title={<Link to={url}>{item.title}</Link>}/>
            </List.Item>
        );
    }
}
