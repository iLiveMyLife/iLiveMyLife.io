import React from "react";
import { Input, List } from "antd";
import SubItem from './SubItem';
import ItemTitle from './ItemTitle';

import './Item.css';
import EditItemPopup from "./EditItemPopup";
import ItemBreadcrumb from "./ItemBreadcrumb";
import Messanger from "./Messanger";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        const [indexedItem, ...indexedItems] = this.props.items;
        const item = indexedItem.item;
        const path = [
            { id: 99, title: 'My Life' },
            { id: 100, title: 'First-level task title' },
            { id: 101, title: 'Second-level task title' },
            { id: 102, title: 'Third-level task title' }
        ];

        this.state = {
            itemId: item.id,
            itemToEdit: item,
            indexedItems: indexedItems,
            item: item,
            path: path,
            inputValue: "",
            isEditFormVisible: false
        };
        console.log(this.state.indexedItems)
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    }

    handlePressEnter = e => {
        if (e.target.value === ''){
            return;
        }

        // Create a item object containing its index and content
        const indexedItem = {
            index: this.state.indexedItems.length + 1,
            item: {title: e.target.value, tags:[]}
        };

        // Add the new item to our array
        const newIndexedItems = this.state.indexedItems.concat(indexedItem);

        this.setState({
            indexedItems: newIndexedItems
        });

        // Clear input
        this.setState({inputValue: ""})
    };

    editItem = indexedItem => {
        this.setState({itemToEdit: indexedItem.item, isEditFormVisible: true})
    };

    onEditItem = (item) => {
        this.setState( {item: item, isEditFormVisible: false});
    };

    onCloseEditItem = () => {
        this.setState({ isEditFormVisible: false });
    };

    removeItem = indexedItem => {
        console.log(indexedItem);
    };

    removeTodo = indexedItem => {
        let newIndexedItems = [...this.state.indexedItems];
        let index = indexedItem.index;

        // Remove element, slice at 1 before since the array starts with index 1 (main item is at 0)
        newIndexedItems.splice(index-1, 1);

        // Decrement greater indexes
        for (let i = index; i < newIndexedItems.length; i++) {
            newIndexedItems[i].index -= 1;
        }

        this.setState({
            indexedItems: newIndexedItems
        });
    };

    render() {
        return (
            <div className="itemContainer">
                <ItemBreadcrumb paths={this.state.path}/>
                <ItemTitle item={this.state.item} editItem={this.editItem} removeItem={this.removeItem}/>

                <Input
                    maxLength={150}
                    placeholder="What is in your mind? What needs to be done? Any idea to research? Some task to share?"
                    onPressEnter={this.handlePressEnter}
                    onChange={this.handleChange}
                    value={this.state.inputValue}/>

                <List
                    size="small"
                    locale={{emptyText: "No items yet. Don't wait to get started. Start mining your thoughts."}}
                    dataSource={this.state.indexedItems}
                    renderItem={indexedItem => (
                        <SubItem
                            indexedItem={indexedItem}
                            editItem={this.editItem}
                            removeItem={this.removeTodo}
                        />
                    )}
                />

                <EditItemPopup
                    key={this.state.itemToEdit.id}
                    item={this.state.itemToEdit}
                    onClose={this.onCloseEditItem}
                    onSubmit={item => this.onEditItem(item)}
                    visible={this.state.isEditFormVisible} />

                <Messanger item={this.state.item}/>
            </div>
        );
    }
}


