import React, { Component } from 'react';
import {Button,Carousel} from 'antd';
import './Presentation.css';
import slideData from './data.json';
import sloganPicture from '../../public/slogans/ComputerBrain.jpg';

class Presentation extends Component {
  state={
    data:slideData
  }
    render() {
        return (
          <Carousel>co
            <div className={"presentaion-center"}>
                <h2>Congratulations,</h2>
                <h3>You are a step closer to merging your Life into the Graph-mind.</h3>
                <br />
                <h4>Start collaborating with others on common projects by merging into your new Life!</h4>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Merge Now</a>
                </Button>
            </div>
            {this.state.data.map((item,index)=>(
              <div className={"carousel-style"}>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
                {item.image ? <img className="slogan-pic" src={item.image}  alt={item.description}/> : null}
                </div>
              ))}
                </Carousel>
        );
    }
}

export default Presentation;