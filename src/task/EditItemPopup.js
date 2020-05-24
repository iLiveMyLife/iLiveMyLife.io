import React, { Component } from "react";
import {Drawer, Input, Button, Form, DatePicker, Switch, notification} from "antd";
import EditableTagGroup from "./EditableTagGroup";
import {Mutation} from "react-apollo";
import {EDIT_ITEM} from "../graphql/item";
import {momentFromUnixTimestamp} from "../util/Helpers";

export default class EditItemPopup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isSubmitting: false,
            index: this.props.index,
            item: this.props.item,
            defaultDueDate: this.getDueDateStringFromTimestamp(this.props.item.dueDate)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item.id == this.props.item.id && prevProps.item.updatedAt !== this.props.item.updatedAt && !this.state.isSubmitting) {
            if (!this.props.visible) {
                this.setState(prevState => ({
                    isSubmitting: false,
                    index: this.props.index,
                    item: this.props.item,
                    defaultDueDate: this.getDueDateStringFromTimestamp(this.props.item.dueDate)
                }));
            }
            else {
                notification.warn({
                    message: 'iLiveMyLife App',
                    description: `Details were just updated by: ${this.props.item.updatedBy}.`
                });
            }
        }
    }

    getDueDateStringFromTimestamp(timestamp) {
        return !timestamp ? null : momentFromUnixTimestamp(timestamp);
    }

    onClose = () => {
        this.props.onClose();

        // the state was not updated when edit window is opened to prevent re-writing fields while editing,
        // so needs to be updated when user close the window without editing
        this.setState(prevState => ({
            isSubmitting: false,
            index: this.props.index,
            item: this.props.item,
            defaultDueDate: this.getDueDateStringFromTimestamp(this.props.item.dueDate)
        }));
    };

    onSubmit = async (e, mutate) => {
        e.preventDefault();

        this.setState({
            isSubmitting: true,
        });

        let response = await mutate({
            variables: {
                index: this.props.index,
                itemInput: {
                    id: this.props.item.id,
                    title: this.state.item.title,
                    description: this.state.item.description,
                    isActive: this.state.item.isActive,
                    dueDate: this.state.item.dueDate,
                    tags: this.state.item.tags,
                    createdAt: this.state.item.createdAt,
                    createdBy: this.state.item.createdBy,
                    updatedAt: this.state.item.updatedAt,
                    updatedBy: this.state.item.updatedBy,
                }
            }
        });

        const { data: { editItem } } = response;
        const {ok} = editItem;

        if(!ok) {
            notification.error({
                message: 'iLiveMyLife App',
                description: 'Some error happened. Refresh to check if it was saved successfully.'
            });
        }

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
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                title: value
            }
        }));
    };

    handleDescriptionChange = (e) => {
        let value = e.target.value;
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
                dueDate: !date ? null : date.valueOf().toString()
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
                                    <Button disabled={this.state.isSubmitting} onClick={async (e) => this.onSubmit(e, mutate)} htmlType="submit" type="primary">Submit</Button>
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
                                    <Input.TextArea required={false} value={this.state.item.description} onChange={this.handleDescriptionChange}/>
                                </Form.Item>
                                <Form.Item label="Status:">
                                    <Switch  checkedChildren="Active" unCheckedChildren="Archived" checked={this.state.item.isActive} onChange={this.handleStatusChange}/>
                                </Form.Item>
                                <Form.Item label="Due Date:">
                                    <DatePicker defaultValue={this.state.defaultDueDate}
                                                value={this.getDueDateStringFromTimestamp(this.state.item.dueDate)}
                                                onChange={this.handleDueDateChange} />
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
