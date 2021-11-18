import React, { Component } from 'react';
import {Carousel} from 'antd';
import './Presentation.css';
import slideData from './data.json';

class Presentation extends Component {
  state={
    data:slideData
  }
    render() {
        return (
            <div className="container">
                <Carousel>
                    {
                        this.state.data.map((item,index) => (
                        <div className={"carousel-style"} key={index}>
                            <h3>{item.title}</h3>
                            {item.image
                                ? item.url
                                    ? <a href={item.url} title={item.title}><img height={"750px"} className="slogan-pic" src={item.image} alt={item.description}/></a>
                                    : <img height={"750px"} className="slogan-pic" src={item.image} alt={item.description}/>
                                : null}
                            <h4>{item.description}</h4>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default Presentation;