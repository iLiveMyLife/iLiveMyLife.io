import React, { Component } from "react";
import { Modal, Icon } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default class RemoveTodoItem extends Component {
    remove = () => {
        this.props.onRemove();
    };

    showDeleteConfirm =(onConfirm) => {
        confirm({
            title: 'Are you sure delete this item?',
            icon: <ExclamationCircleOutlined />,
            content: 'This item will be deleted for everyone your share it with with all it\'s sub items.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onConfirm();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    render() {
        return (
            <Icon type="close-circle" theme="filled" onClick={() => this.showDeleteConfirm(() => this.remove())} />
        );
    }
}