import React, { Component } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined, CloseCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

export default class RemoveItem extends Component {
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
            <CloseCircleFilled onClick={() => this.showDeleteConfirm(() => this.remove())} />
        );
    }
}