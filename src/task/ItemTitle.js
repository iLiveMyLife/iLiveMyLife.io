import React, { Component } from "react";
import {PageHeader, Tag, Popover, Typography, Descriptions, Row } from "antd";
import RemoveItem from "./RemoveItem";
import EditItem from "./EditItem";
import {dateFromUnixTimestamp} from "../util/Helpers";

const { Paragraph } = Typography;

export default class ItemTitle extends Component {
    editItem = () => {
        this.props.editItem(this.props.indexedItem);
    };

    removeItem = (mutate) => {
        this.props.removeItem(this.props.indexedItem, mutate);
    };

    render() {
        const item = this.props.indexedItem.item;
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    title={
                        <Popover placement="bottomLeft" content={
                            <div className="itemHeaderPopover">
                                <Row>
                                    <Paragraph>{item.description}</Paragraph>
                                </Row>

                                <Row>
                                    <Descriptions size="small" column={2}>
                                        <Descriptions.Item label="Status">
                                            {item.isActive ? (<Tag color="blue">Active</Tag>) : (<Tag color="grey">Inactive</Tag>)}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Created">{item.createdBy}</Descriptions.Item>
                                        <Descriptions.Item label="Creation Time">{dateFromUnixTimestamp(item.createdAt)}</Descriptions.Item>
                                        <Descriptions.Item label="Due Date">{item.dueDate}</Descriptions.Item>
                                    </Descriptions>
                                </Row>

                                <Row>
                                    <Descriptions size="small" column={1}>
                                        <Descriptions.Item label="Tags">
                                            {item.tags.map(tag => (<Tag key={tag} color="cyan">{tag}</Tag>))}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Row>
                            </div>
                        }
                        >
                            {item.title}
                        </Popover>
                    }
                    extra={[
                        <EditItem key="1" onEdit={this.editItem} />,
                        "  |",
                        <RemoveItem item={item} key="2" onRemove={this.removeItem} />
                    ]}
                >
                </PageHeader>
            </div>
        );
    }
}
