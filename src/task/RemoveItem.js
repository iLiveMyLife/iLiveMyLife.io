import React, { Component } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined, CloseCircleFilled } from '@ant-design/icons';
import {Mutation} from "react-apollo";
import {REMOVE_ITEM} from "../graphql/item";

const { confirm } = Modal;

export default class RemoveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitting: false
        };
    }

    remove = async (mutate) => {
        this.props.onRemove(mutate);
    };

    showDeleteConfirm = async (onConfirm) => {
        confirm({
            title: `Are you sure you want to archive: ${this.props.item.title}?`,
            icon: <ExclamationCircleOutlined />,
            content: 'It is going to be archived for everyone you share it with together with all it\'s sub items.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onConfirm();
            },
            onCancel() {
                console.log('Cancel removal');
            },
        });
    };

    render() {
        return (
            <Mutation
                mutation={REMOVE_ITEM}>
                {
                    (mutate, { client }) => (
                        <CloseCircleFilled onClick={() => this.showDeleteConfirm(async () => this.remove(mutate))} />
                    )
                }
            </Mutation>
        );
    }
}
