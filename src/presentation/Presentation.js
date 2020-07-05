import React, { Component } from 'react';
import {Empty, Button } from 'antd';
import './Presentation.css';
import { APP_URL } from '../constants';

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
                        Congratulations! You've finally found your future self!
                        <br />
                        You are one step closer to create your new Life (the other way)
                    </span>
                }
            >
                <Button type="primary"><a href={APP_URL + "/login"}>Create</a></Button>
            </Empty>
        );
    }
}

export default Presentation;
