import React, {useEffect, useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {Carousel, Col, Row} from 'antd';
import './Presentation.css';
import slideData from './data.json';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const Presentation = () => {
    const [data, setData] = useState(slideData);
    const [columnHeight, setColumnHeight] = useState('auto');
    const carouselRef = useRef(null);

    const updateColumnHeight = () => {
        // Check if the carousel exists and is rendered
        if (carouselRef && carouselRef.current) {
            const currentSlide = carouselRef.current.innerSlider.list.querySelector('.slick-active');
            if (currentSlide) {
                const height = currentSlide.offsetHeight;
                setColumnHeight(`${height}px`);
            }
        }
    };

    useEffect(() => {
        updateColumnHeight();
        window.addEventListener('resize', updateColumnHeight);
        return () => window.removeEventListener('resize', updateColumnHeight);
    }, []);

    const next = () => carouselRef.current.next();
    const previous = () => carouselRef.current.prev();

    const renderStructuredData = (item) => {
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

    return (
        <Row justify="center">
            <Col span={2} className={'control-column'} onClick={previous} style={{height: columnHeight}}>
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
                          ref={carouselRef} >
                    {
                        data.map((item, index) => (
                            <React.Fragment key={index}>
                                {/* Render structured data for each slide */}
                                <script type="application/ld+json">
                                    {JSON.stringify(renderStructuredData(item))}
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
            <Col span={2} className={"control-column"} onClick={next} style={{height: columnHeight}}>
                <RightOutlined />
            </Col>
        </Row>
    );
}
export default Presentation;
