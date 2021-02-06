import React, { Component } from 'react';
import {Button} from 'antd';
import './Presentation.css';

class Presentation extends Component {
    render() {
        return (
            <div className={"presentaion-center"}>
                <h2>Congratulations,</h2>
                <h3>You are a step closer to merging your Life into the Graph-mind.</h3>
                <br />
                <h4>Start collaborating with others on common projects by merging into your new Life!</h4>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Merge Now</a>
                </Button>
            </div>
        );
    }
}

export default Presentation;
