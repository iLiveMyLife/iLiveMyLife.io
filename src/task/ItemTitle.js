import React, { Component } from "react";
import {PageHeader, Tag, Popover, Typography, Descriptions, Row } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";

const { Paragraph } = Typography;

export default class ItemTitle extends Component {
    editItem = () => {
        this.props.editItem(this.props.item);
    };

    removeItem = () => {
        this.props.removeItem(this.props.item);
    };

    render() {
        return (
            <div>
                <PageHeader
                    title={
                        <Popover placement="bottomLeft" content={
                            <div className="itemHeaderPopover">
                                <Row>
                                    <Paragraph>{this.props.item.description}</Paragraph>
                                </Row>

                                <Row>
                                    <Descriptions size="small" column={2}>
                                        <Descriptions.Item label="Status">
                                            {this.props.item.isActive ? (<Tag color="blue">Active</Tag>) : (<Tag color="grey">Inactive</Tag>)}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Created">{this.props.item.createdBy}</Descriptions.Item>
                                        <Descriptions.Item label="Creation Time">{this.props.item.createdAt}</Descriptions.Item>
                                        <Descriptions.Item label="Due Date">{this.props.item.dueDate}</Descriptions.Item>
                                    </Descriptions>
                                </Row>

                                <Row>
                                    <Descriptions size="small" column={1}>
                                        <Descriptions.Item label="Tags">
                                            {this.props.item.tags.map(tag => (<Tag key={tag} color="cyan">{tag}</Tag>))}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Row>
                            </div>
                        }
                        >
                            {this.props.item.title}
                        </Popover>
                    }
                    extra={[
                        <EditItem key="1" onEdit={this.editItem} />,
                        "  |",
                        <RemoveItem key="2" onRemove={this.removeItem} />
                    ]}
                >
                </PageHeader>
            </div>
        );
    }
}
