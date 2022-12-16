import React from 'react';
import './AppFooter.css';
import {GithubOutlined, MailOutlined} from '@ant-design/icons';
import {Col, Row} from "antd";
import {Link} from "react-router-dom";

const AppFooter = () => {
    return (
        <div className="container app-footer">
            <Row className={'footer-content'}>
                <Col span={24}><h1 className={'footer-title'}>iLiveMyLife ...and so do you</h1></Col>
                <Col  xs={24} xl={12} md={12} sm={12} className={'footer-links'}>
                        <Col><a href="https://app.ilivemylife.io/item/000001736056c2cb-2655b2cf545d0001" target="_blank" rel="noopener noreferrer">Project</a></Col>
                        <Col><a href="https://www.youtube.com/playlist?list=PLYkUZvRwI3MhnNJGQ12lqXUageAX0sxtt" target="_blank" rel="noopener noreferrer">How-to</a></Col>
                        <Col><a href="https://app.ilivemylife.io/document/0000017af0ef0397-22abe99233a90000" target="_blank" rel="noopener noreferrer">Whitepaper</a></Col>
                        <Col><a href="https://app.ilivemylife.io/item/0000017c75eb8baa-260630ac320d0000" target="_blank" rel="noopener noreferrer">Deck</a></Col>
                        <Col><a href="https://app.ilivemylife.io/graph/000001736056c2cb-2655b2cf545d0001" target="_blank" rel="noopener noreferrer">Graph</a></Col>
                        <Col><Link to={"./payment"}>Participate</Link></Col>
                </Col>
                <Col xs={24} xl={12} md={12} sm={12} className="socials-container">
                    <Col>
                        <a className="socials" href={"mailto: info@ilivemylife.io" }><MailOutlined /> Send email</a>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}

export default AppFooter;