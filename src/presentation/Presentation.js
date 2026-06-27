import React, {useEffect, useRef, useState} from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import {Carousel, Col, Row} from 'antd';
import './Presentation.css';
import slideData from './data.json';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {useHistory, useParams} from "react-router-dom";

// True only while the page is being prerendered by Puppeteer (see scripts/prerender.js).
// In that mode we disable autoplay so each URL is snapshotted on its own slide,
// keeping title/canonical deterministic. Live visitors are unaffected.
const isPrerender = typeof navigator !== 'undefined' && /Prerender/i.test(navigator.userAgent);

const Presentation = () => {
    const { slidePath } = useParams();
    const history = useHistory();
    const initialIndex = slideData.findIndex(slide => slide.path === `/${slidePath}`);
    const [currentIndex, setCurrentIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
    //const currentSlide = slideData[currentIndex] || slideData[0]; // Default to first slide
    const [data, setData] = useState(slideData);
    const [columnHeight, setColumnHeight] = useState('auto');
    const carouselRef = useRef(null);
    const [isThrottled, setIsThrottled] = useState(false);

    useEffect(() => {
        if (currentIndex !== -1) {
            history.replace(slideData[currentIndex].path);
        }
    }, [currentIndex, history]);

    // Sync carousel position with currentIndex
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.goTo(currentIndex);
        }
    }, [currentIndex]);

    useEffect(() => {
        const resetThrottle = () => setIsThrottled(false);
        if (isThrottled) {
            const timer = setTimeout(resetThrottle, 300); // Задержка в 300мс между щелчками
            return () => clearTimeout(timer);
        }
    }, [isThrottled]);

    useEffect(() => {
        updateColumnHeight();
        window.addEventListener('resize', updateColumnHeight);
        return () => window.removeEventListener('resize', updateColumnHeight);
    }, []);

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

    const next = () => {
        if (!isThrottled) {
            const nextIndex = (currentIndex + 1) % slideData.length;
            setCurrentIndex(nextIndex);
            setIsThrottled(true);
        }
    };

    const previous = () => {
        if (!isThrottled) {
            const prevIndex = (currentIndex - 1 + slideData.length) % slideData.length;
            setCurrentIndex(prevIndex);
            setIsThrottled(true);
        }
    };

    const handleBeforeChange = (from, to) => {
        if (!isThrottled) {
            setCurrentIndex(to);
            setIsThrottled(true);
        }
    };

    const renderStructuredData = (item) => {
        // Type can be like 'Thing' or SoftwareApplication, Concept, CreativeWork, etc.
        return {
            "@context": "http://schema.org",
            "@type": item.type,
            "name": item.title,
            "description": item.description,
            "image": item.image,
            "url": `${window.location.origin}${item.path}`, // URL текущего слайда
            "relatedLink": item.url // optional: include only if available
        };
    }

    const current = slideData[currentIndex] || slideData[0];
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://www.ilivemylife.io';
    const canonicalUrl = `${origin}${current.path}`;
    const metaDesc = (current.description || '')
        .replace(/[#*_>`]/g, '').replace(/\s+/g, ' ').trim().slice(0, 160);
    const ogImage = current.image
        ? `${origin}/${current.image.replace(/^\.?\//, '')}`
        : `${origin}/favicon.png`;

    return (
        <>
            <Helmet>
                <title>{current.title || "iLiveMyLife app"}</title>
                <meta name="description" content={metaDesc} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="iLiveMyLife" />
                <meta property="og:title" content={current.title} />
                <meta property="og:description" content={metaDesc} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={current.title} />
                <meta name="twitter:description" content={metaDesc} />
                <meta name="twitter:image" content={ogImage} />
            </Helmet>
            <Row justify="center">
                <Col span={2} className={'control-column'} onClick={previous} style={{height: columnHeight}}>
                    <LeftOutlined />
                </Col>
                <Col span={20}>
                    <Carousel vertical={false}
                              autoplay={!isPrerender}
                              pauseOnHover={true}
                              pauseOnDotsHover={true}
                              dotPosition={"bottom"}
                              arrows={true}
                              autoplaySpeed={3000}
                              accessibility={true}
                              beforeChange={handleBeforeChange}
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
        </>

    );
}
export default Presentation;
