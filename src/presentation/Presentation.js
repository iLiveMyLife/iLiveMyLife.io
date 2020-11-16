import React, { Component } from 'react';
import {Empty, Button } from 'antd';
import './Presentation.css';

class Presentation extends Component {

    render() {
        console.log(this.props.currentUser)
        return (
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        <h3>Congratulations!</h3>
                        <h2>You are one step closer to create your new Life.</h2>
                        <h1>Organically in synergy with computers.</h1>
                    </span>
                }
            >
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Create Now</a>
                </Button>
            </Empty>
        );
    }
}

export default Presentation;
