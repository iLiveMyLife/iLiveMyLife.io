import React, { Component } from 'react';
import {Typography, Button } from 'antd';
import './Presentation.css';

class Presentation extends Component {
    render() {
        return (
            <div className={"presentaion-center"}>
                <h4>Hey, Congratulations!</h4>
                <h3>You are one step closer to create your new Life.</h3>
                <h1>Organically in synergy with computers.</h1>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Create Now</a>
                </Button>
            </div>
        );
    }
}

export default Presentation;
