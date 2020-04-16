import React from "react";
import { List } from "antd";
import SubItem from './SubItem';

import './Item.css';

export default class ItemList extends React.Component{
    editItem = (indexedItem) => {
        this.props.editItem(indexedItem);
    };

    removeItem = (indexedItem) => {
        this.props.removeItem(indexedItem);
    };

    render(){
        return <List
            size="small"
            locale={{emptyText: "No items yet. Don't wait to get started. Start mining your thoughts."}}
            dataSource={this.props.indexedItems}
            renderItem={indexedItem => (
                <SubItem
                    indexedItem={indexedItem}
                    editItem={this.editItem}
                    removeItem={this.removeItem}
                />)
            }
        />
    }
}
