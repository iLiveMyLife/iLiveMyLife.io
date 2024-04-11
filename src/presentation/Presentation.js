import React, { Component } from 'react';
import {Carousel, Col, Row} from 'antd';
import './Presentation.css';
import slideData from './data.json';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

class Presentation extends Component {
    state= {
        data: slideData
    }

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();

    }
    next() {
        this.carousel.next();
    }

    previous() {
        this.carousel.prev();
    }

    render() {
        return (
            <Row justify="center">
                <Col span={2} className={'control-buttons'}>
                    <LeftOutlined onClick={this.previous} />
                </Col>
                <Col span={20}>
                    <Carousel vertical={true}
                              autoplay
                              pauseOnHover={true}
                              pauseOnDotsHover={true}
                              dotPosition={"bottom"}
                              arrows={true}
                              autoplaySpeed={3000}
                              accessibility={true}

                              ref={node => (this.carousel = node)} >
                        {
                            this.state.data.map((item,index) => (
                                <div className={"carousel-style"} key={index}>
                                    <h3>{item.title}</h3>
                                    <h4 className={'description'}>{item.description}</h4>
                                    {item.image
                                        ? item.url
                                            ? <a href={item.url} title={item.title}><img className="slogan-pic" src={item.image} alt={item.description}/></a>
                                            : <img className="slogan-pic" src={item.image} alt={item.description}/>
                                        : null}
                                </div>
                            ))}
                    </Carousel>
                </Col>
                <Col span={2} className={'control-buttons'} >
                    <RightOutlined onClick={this.next} />
                </Col>
            </Row>
        );
    }
}
export default Presentation;
