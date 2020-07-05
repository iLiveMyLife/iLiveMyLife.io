import React, {Component} from "react";
import {Descriptions, Popover, Row, Tag, Typography} from "antd";
import {dateFromUnixTimestamp} from "../util/Helpers";
const { Paragraph } = Typography;

export default class ItemDetailsPopover extends Component {
    render() {
        let item = this.props.item;
        return (
            <Popover placement="bottomLeft" content={
                <div className="itemHeaderPopover">
                    <Row>
                        <Paragraph>{item.description}</Paragraph>
                    </Row>

                    <Row>
                        <Descriptions size="small" column={2}>
                            {/*
                            <Descriptions.Item label="Status">
                                {item.isActive ? (<Tag color="blue">Active</Tag>) : (<Tag color="grey">Archived</Tag>)}
                            </Descriptions.Item>
                            */}
                            <Descriptions.Item label="Due Date">{dateFromUnixTimestamp(item.dueDate)}</Descriptions.Item>
                            <Descriptions.Item label="Created by">{item.createdBy}</Descriptions.Item>
                            <Descriptions.Item label="Updated by">{item.updatedBy}</Descriptions.Item>
                            <Descriptions.Item label="Created at">{dateFromUnixTimestamp(item.createdAt)}</Descriptions.Item>
                            <Descriptions.Item label="Updated at">{dateFromUnixTimestamp(item.updatedAt)}</Descriptions.Item>
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
                {this.props.title}
            </Popover>
        );
    }
}
