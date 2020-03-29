import React, { Component } from "react";
import { Input, List, Breadcrumb } from "antd";
import TodoItem from './TodoItem';
import ItemTitle from './ItemTitle';
import './Todo.css';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        const item = {
            title: 'Let us brainstorm about this cool idea together',
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
            inputValue: "",
            todos: [
                {index: 0, content: "Bird's Nest", date: null, dateString: ""},
                {index: 1, content: "Eagle's Nest", date: null, dateString: ""},
                {index: 2, content: "Trading", date: null, dateString: ""}
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
        // Create a todo object containing its index, content,
        // as well as an empty date
        const todo = {
            index: this.state.todos.length,
            content: e.target.value,
            date: null,
            dateString: ""
        };

        // Add the new todo to our array
        const newTodos = this.state.todos.concat(todo);

        this.setState({
            todos: newTodos
        });
        console.log(this.state.todos);
        // Clear input
        this.setState({inputValue: ""})
    };

    removeTodo = index => {
        let newTodos = [...this.state.todos];

        // Remove element
        newTodos.splice(index, 1);

        // Decrement greater indexes
        for (let i = index; i < newTodos.length; i++) {
            newTodos[i].index -= 1;
        }

        this.setState({
            todos: newTodos
        });
    };

    showEditItemDialog = item => {
        console.log(item);
    };

    removeItem = item => {
        console.log(item);
    }

    setDate = (index, date, dateString) => {
        // Set the date of the given todo
        let newTodos = [...this.state.todos];
        newTodos[index].date = date;
        newTodos[index].dateString = dateString;

        // Initialize the state
        this.setState({
            todos: newTodos
        });
    };

    render() {
        return (
            <div className="todoContainer">
                <Breadcrumb routes={this.state.item.breadcrumbs} />

                <ItemTitle item={this.state.item} showEditItemDialog={this.showEditItemDialog} removeItem={this.removeItem}/>

                <Input
                    placeholder="What is in your mind? What needs to be done? Any idea to research? Some task to share?"
                    onPressEnter={this.handlePressEnter}
                    onChange={this.handleChange}
                value={this.state.inputValue}/>

                <List
                    size="small"
                    locale={{ emptyText: "No items yet. Don't be wait to get started. Start mining your thoughts." }}
                    dataSource={this.state.todos}
                    renderItem={item => (
                        <TodoItem
                            todo={item}
                            removeTodo={this.removeTodo}
                            setDate={this.setDate}
                        />
                    )}
                />
            </div>
        );
    }
}


