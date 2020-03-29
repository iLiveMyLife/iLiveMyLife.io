import React, { Component } from "react";
import {DatePicker, List } from "antd";
import RemoveTodoItem from "./RemoveTodoItem";

export default class TodoItem extends Component {
    remove = () => {
        this.props.removeTodo(this.props.todo.index);
    };

    handleDateChange = (date, dateString) => {
        // Update the date when changed
        this.props.setDate(this.props.todo.index, date, dateString);
    };

    render() {
        return (
            <List.Item
                actions={[
                    <DatePicker
                        format="MM/DD/YYYY"
                        onChange={this.handleDateChange}
                        value={this.props.todo.date}
                    />,
                    <RemoveTodoItem onRemove={this.remove}/>
                ]}
            >
                {this.props.todo.content}
            </List.Item>
        );
    }
}