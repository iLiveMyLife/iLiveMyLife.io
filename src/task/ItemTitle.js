import React, { Component } from "react";
import {PageHeader, Tag, Typography, Descriptions, Row, Icon} from "antd";
import RemoveTodoItem from "./RemoveTodoItem";
const { Paragraph } = Typography;

export default class ItemTitle extends Component {
    showEditItemDialog = () => {
        this.props.showEditItemDialog(this.props.item);
    };

    removeItem = () => {
        this.props.removeItem(this.props.item);
    };
    render() {
        return (
            <div>
                <PageHeader
                    onBack={() => window.history.back()}
                    className="site-page-header"
                    title={this.props.item.title}
                    extra={[
                        <Icon key="1" type="edit" theme="filled" onClick={this.showEditItemDialog} />,
                        <RemoveTodoItem key="2" onRemove={this.removeItem}/>
                    ]}
                >
                    <Row>
                        <Paragraph>{this.props.item.description}</Paragraph>
                    </Row>

                    <Row>
                        <Descriptions size="small" column={3}>

                            <Descriptions.Item label="Status">
                                <Tag color="blue">Active</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="Created">Ilya Sorokin</Descriptions.Item>
                            <Descriptions.Item label="Parent item">
                                <a>421421</a>
                            </Descriptions.Item>
                            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                            <Descriptions.Item label="Due Date">2017-10-10</Descriptions.Item>
                        </Descriptions>
                    </Row>

                    <Row>
                        <Descriptions size="small" column={1}>
                            <Descriptions.Item label="Tags">
                                <Tag color="cyan">tag 1</Tag>
                                <Tag color="cyan">tag 2</Tag>
                            </Descriptions.Item>
                        </Descriptions>
                    </Row>
                </PageHeader>
            </div>
        );
    }
}