import React, { Component } from "react";
import { Drawer, Input, Button, Form, DatePicker, Switch } from "antd";
import EditableTagGroup from "./EditableTagGroup";
import moment from "moment";
import { DATE_FORMAT } from '../constants';
import {Mutation} from "react-apollo";
import {EDIT_ITEM} from "../graphql/item";

export default class EditItemPopup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            index:this.props.index,
            item: this.props.item,
            defaultDueDate: !this.props.item.dueDate ? null : moment(this.props.item.dueDate, DATE_FORMAT)
        }
    }

    onClose = () => {
        this.props.onClose();
    };

    onSubmit = async (e, mutate) => {
        e.preventDefault();

        this.setState({
            isSubmitting: true,
        });

        const item = await mutate({
            variables: {
                index: this.props.index,
                itemInput: {
                    id: this.props.item.id,
                    title: this.state.item.title,
                    description: this.state.item.description,
                    isActive: this.state.item.isActive,
                    dueDate: this.state.item.dueDate,
                    tags: this.state.item.tags
                }
            }
        });

        this.setState({
            isSubmitting: false
        });

        this.onClose();
    };

    onTagsListChange = (tags) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                tags: tags
            }
        }));
    };

    handleStatusChange = (checked) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                isActive: checked
            }
        }));
    };

    handleTitleChange = (e) => {
        let value = e.target.value;

        if (value === ''){
            return;
        }

        this.setState(prevState => ({
            item: {
                ...prevState.item,
                title: value
            }
        }));
    };

    handleDescriptionChange = (e) => {
        let value = e.target.value;

        if (value === ''){
            return;
        }

        this.setState(prevState => ({
            item: {
                ...prevState.item,
                description: value
            }
        }));
    };

    handleDueDateChange = (date, dateString) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                dueDate: dateString
            }
        }));
    };

    render() {
        return (
            <Mutation mutation={EDIT_ITEM}>
                {
                    (mutate, { client }) => (
                        <Drawer
                            title="Edit your thought here"
                            onClose={this.onClose}
                            visible={this.props.visible}
                            bodyStyle={{ paddingBottom: 80 }}
                            footer={
                                <div style={{ textAlign: 'right' }}>
                                    <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancel</Button>
                                    <Button disabled={this.state.isSubmitting} onClick={async (e) => this.onSubmit(e, mutate)} type="primary">Submit</Button>
                                </div>
                            }
                        >
                            <Form
                                labelCol={{ span: 26 }}
                                wrapperCol={{ span: 26 }}
                                layout="vertical"
                                size="small"
                            >
                                <Form.Item label="Title:">
                                    <Input maxLength={150} value={this.state.item.title} onChange={this.handleTitleChange}/>
                                </Form.Item>
                                <Form.Item label="Description:">
                                    <Input.TextArea value={this.state.item.description} onChange={this.handleDescriptionChange}/>
                                </Form.Item>
                                <Form.Item label="Status:">
                                    <Switch  checkedChildren="Active" unCheckedChildren="Inactive" checked={this.state.item.isActive} onChange={this.handleStatusChange}/>
                                </Form.Item>
                                <Form.Item label="Due Date:">
                                    <DatePicker defaultValue={this.state.defaultDueDate}
                                                onChange={this.handleDueDateChange}   />
                                </Form.Item>
                                <Form.Item label="Tags:">
                                    <EditableTagGroup tags={this.state.item.tags} onTagsListChange={this.onTagsListChange}/>
                                </Form.Item>
                            </Form>
                        </Drawer>
                    )
                }
            </Mutation>
        );
    }
}
