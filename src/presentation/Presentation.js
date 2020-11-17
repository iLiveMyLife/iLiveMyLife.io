import React, { Component } from 'react';
import {Button} from 'antd';
import './Presentation.css';

class Presentation extends Component {
    render() {
        return (
            <div className={"presentaion-center"}>
                <h1>Congratulations,</h1>
                <h2>You are one step closer to merging your Life with the Hive-mind!</h2>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Create Now</a>
                </Button>
            </div>
        );
    }
}

export default Presentation;
