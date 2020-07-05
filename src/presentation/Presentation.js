import React, { Component } from 'react';
import {Empty, Button } from 'antd';
import './Presentation.css';

class Presentation extends Component {
    render() {
        return (
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        Congratulations! You are one step closer to create your new Life (the other way)
                    </span>
                }
            >
                <Button type="primary">Create Now</Button>
            </Empty>
        );
    }
}

export default Presentation;
