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
                    <Col><a href="https://www.youtube.com/playlist?list=PLYkUZvRwI3MhnNJGQ12lqXUageAX0sxtt" target="_blank" rel="noopener noreferrer">Basic How-to videos on YouTube (but ask Lifebot for help)</a></Col>
                    <Col><a href="https://app.ilivemylife.io/item/000001736056c2cb-2655b2cf545d0001" target="_blank" rel="noopener noreferrer">iLiveMyLife Project management node</a></Col>
                    <Col><a href="https://app.ilivemylife.io/item/0000017c75eb8baa-260630ac320d0000" target="_blank" rel="noopener noreferrer">Our Deck node</a></Col>
                    <Col><a href="https://app.ilivemylife.io/item/0000017bc1c523b1-962bac6823350000" target="_blank" rel="noopener noreferrer">Our Roadmap node</a></Col>
                    <Col><a href="https://app.ilivemylife.io/graph/000001736056c2cb-2655b2cf545d0001" target="_blank" rel="noopener noreferrer">This is how iLiveMyLife project node looks as AR/VR 3D Graph</a></Col>
                    <Col><a href="https://app.ilivemylife.io/signup" rel="noopener noreferrer" target="_blank">Create your 'My Life' node and start asking your personal AI Assistant Lifebot how it could be helpful for you</a></Col>
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
