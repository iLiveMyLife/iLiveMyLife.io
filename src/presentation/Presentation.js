import React, { Component } from 'react';
import {Button} from 'antd';
import './Presentation.css';

class Presentation extends Component {
    render() {
        return (
            <div className={"presentaion-center"}>
                <h2>Congratulations,</h2>
                <h3>You are a step closer to merging your Life with the Graph-mind!</h3>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Create Now</a>
                </Button>
            </div>
        );
    }
}

export default Presentation;
