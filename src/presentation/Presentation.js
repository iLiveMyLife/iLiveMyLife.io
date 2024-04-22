import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {Carousel, Col, Row} from 'antd';
import './Presentation.css';
import slideData from './data.json';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

class Presentation extends Component {
    state= {
        data: slideData,
        columnHeight: 'auto'
    }

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();

    }

    componentDidMount() {
        this.updateColumnHeight();
        window.addEventListener('resize', this.updateColumnHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateColumnHeight);
    }

    updateColumnHeight = () => {
        // Check if the carousel exists and is rendered
        if (this.carousel && this.carousel.current) {
            const currentSlide = this.carousel.current.innerSlider.list.querySelector('.slick-active');
            if (currentSlide) {
                const height = currentSlide.offsetHeight;
                this.setState({ columnHeight: `${height}px` });
            }
        }
    };

    next() {
        this.carousel.next();
    }

    previous() {
        this.carousel.prev();
    }

    renderStructuredData(item) {
        // Type can be like 'Thing' or SoftwareApplication, Concept, CreativeWork, etc.
        return {
            "@context": "http://schema.org",
            "@type": item.type,
            "name": item.title,
            "description": item.description,
            "image": item.image,
            "url": item.url // optional: include only if available
        };
    }

    render() {
        const { columnHeight } = this.state;

        return (
            <Row justify="center">
                <Col span={2} className={'control-column'} onClick={this.previous} style={{height: columnHeight}}>
                    <LeftOutlined />
                </Col>
                <Col span={20}>
                    <Carousel vertical={false}
                              autoplay
                              pauseOnHover={true}
                              pauseOnDotsHover={true}
                              dotPosition={"bottom"}
                              arrows={true}
                              autoplaySpeed={3000}
                              accessibility={true}
                              ref={node => (this.carousel = node)} >
                        {
                            this.state.data.map((item, index) => (
                                <React.Fragment key={index}>
                                    {/* Render structured data for each slide */}
                                    <script type="application/ld+json">
                                        {JSON.stringify(this.renderStructuredData(item))}
                                    </script>
                                    <div className={"carousel-style"}>
                                        <h3>{item.title}</h3>
                                        <ReactMarkdown className={'slogan-description'} children={item.description} />
                                        {item.image &&
                                            (item.url
                                                    ? <a href={item.url} title={item.title}><img className="slogan-pic" src={item.image} alt={item.description}/></a>
                                                    : <img className="slogan-pic" src={item.image} alt={item.description}/>
                                            )
                                        }
                                    </div>
                                </React.Fragment>
                            ))
                        }
                    </Carousel>
                </Col>
                <Col span={2} className={"control-column"} onClick={this.next} style={{height: columnHeight}}>
                    <RightOutlined />
                </Col>
            </Row>
        );
    }
}
export default Presentation;
