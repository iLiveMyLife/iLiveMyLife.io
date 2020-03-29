import React, { Component } from "react";
import { Drawer, Input, List, Breadcrumb, Button } from "antd";
import SubItem from './SubItem';
import ItemTitle from './ItemTitle';
import './Item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);

        const item = {
            title: 'Let us brainstorm',
            description : 'This is a long desciption, and i am not sure this is the right place for it',
            breadcrumbs: [
                {
                    path: 'index',
                    breadcrumbName: 'First-level task title'
                },
                {
                    path: 'first',
                    breadcrumbName: 'Second-level task title'
                },
                {
                    path: 'second',
                    breadcrumbName: 'Third-level task title'
                }
            ]
        };

        this.state = {
            isEditFormVisible: false,
            inputValue: "",
            items: [
                {index: 0, title: "Bird's Nest", date: null, dateString: ""},
                {index: 1, title: "Eagle's Nest", date: null, dateString: ""},
                {index: 2, title: "Trading", date: null, dateString: ""}
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
            title: e.target.value
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
        console.log(item);
        this.setState({isEditFormVisible: true})

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
                <Breadcrumb routes={this.state.item.breadcrumbs} />

                <ItemTitle item={this.state.item} editItem={this.editItem} removeItem={this.removeItem}/>

                <Input
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

                <Drawer
                    title="Edit your thought here"
                    onClose={this.onCloseEditItem}
                    visible={this.state.isEditFormVisible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div style={{ textAlign: 'right' }}>
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancel</Button>
                            <Button onClick={this.onClose} type="primary">Submit</Button>
                        </div>
                    }
                >
                    Here you go
                </Drawer>
            </div>
        );
    }
}


