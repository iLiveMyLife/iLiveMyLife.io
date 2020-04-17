import React, { Component } from "react";
import { PageHeader } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";
import ItemDetailsPopover from "./ItemDetailsPopover";

export default class ItemTitle extends Component {
    editItem = () => {
        this.props.editItem(this.props.indexedItem);
    };

    removeItem = (mutate) => {
        this.props.removeItem(this.props.indexedItem, mutate);
    };

    render() {
        const item = this.props.indexedItem.item;
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={
                        <ItemDetailsPopover item={item} title={item.title} />
                    }
                    extra={[
                        <EditItem key="1" onEdit={this.editItem} />,
                        "  |",
                        <RemoveItem item={item} key="2" onRemove={this.removeItem} />
                    ]}
                >
                </PageHeader>
            </div>
        );
    }
}
