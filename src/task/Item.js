import React, { Component } from "react";
import { Input, List } from "antd";
import SubItem from './SubItem';
import ItemTitle from './ItemTitle';

import './Item.css';
import EditItemPopup from "./EditItemPopup";
import ItemBreadcrumb from "./ItemBreadcrumb";
import Messanger from "./Messanger";
import Sender from "./Sender";

export default class Item extends Component {
    constructor(props) {
        super(props);

        const item = {
            id:0,
            title: "Let's brainstorm",
            description : 'This is a long description, and i am not sure this is the right place for it',
            isActive: true,
            tags: ['tag1', 'tag2'],
            dueDate: '2020-01-01',
            createdBy: 'Ilya Sorokin',
            createdAt: '2017-01-10',
            path: [
                { id: 99, title: 'My Life' },
                { id: 100, title: 'First-level task title' },
                { id: 101, title: 'Second-level task title' },
                { id: 102, title: 'Third-level task title' }
            ]
        };

        this.state = {
            isEditFormVisible: false,
            itemToEdit: item,
            inputValue: "",
            items: [
                { index: 0, id:1, title: "Bird's Nest", tags: [], path:[{ id: 99, title: 'My Life' },] },
                { index: 1, id:2, title: "Eagle's Nest", tags: [], path:[{ id: 99, title: 'My Life' },] },
                { index: 2, id:3, title: "Trading", tags: [], path:[{ id: 99, title: 'My Life' },] }
            ],
            item: item
        };
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

        // Create a todo object containing its index, content,
        // as well as an empty date
        const item = {
            index: this.state.items.length,
            title: e.target.value,
            tags: []
        };

        // Add the new todo to our array
        const newItems = this.state.items.concat(item);

        this.setState({
            items: newItems
        });

        // Clear input
        this.setState({inputValue: ""})
    };

    editItem = item => {

        this.setState({itemToEdit: item, isEditFormVisible: true})
        //console.log(this.state.itemToEdit);
    };

    onEditItem = (item) => {
        this.setState( {item: item, isEditFormVisible: false});
    };

    onCloseEditItem = () => {
        this.setState({ isEditFormVisible: false });
    };

    removeItem = item => {
        console.log(item);
    };

    removeTodo = item => {
        let newItems = [...this.state.items];
        let index = item.index;

        // Remove element
        newItems.splice(index, 1);

        // Decrement greater indexes
        for (let i = index; i < newItems.length; i++) {
            newItems[i].index -= 1;
        }

        this.setState({
            items: newItems
        });
    };

    render() {
        return (
            <div className="itemContainer">
                <ItemBreadcrumb paths={this.state.item.path}/>
                <ItemTitle item={this.state.item} editItem={this.editItem} removeItem={this.removeItem}/>

                <Input
                    maxLength={150}
                    placeholder="What is in your mind? What needs to be done? Any idea to research? Some task to share?"
                    onPressEnter={this.handlePressEnter}
                    onChange={this.handleChange}
                    value={this.state.inputValue}/>

                <List
                    size="small"
                    locale={{ emptyText: "No items yet. Don't be wait to get started. Start mining your thoughts." }}
                    dataSource={this.state.items}
                    renderItem={item => (
                        <SubItem
                            item={item}
                            removeItem={this.removeTodo}
                            editItem={this.editItem}
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


