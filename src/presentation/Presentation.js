import React, { Component } from 'react';
import {Button,Carousel} from 'antd';
import './Presentation.css';

function onChange(a, b, c) {
    console.log(a, b, c);
  }

class Presentation extends Component {
    render() {
        return (
            <Carousel afterChange={onChange}> 
            <div className={"presentaion-center"}>
                <h2>Congratulations,</h2>
                <h3>You are a step closer to merging your Life into the Graph-mind.</h3>
                <br />
                <h4>Start collaborating with others on common projects by merging into your new Life!</h4>
                <Button type="primary">
                    <a href="https://app.ilivemylife.io/signup">Merge Now</a>
                </Button>
            </div>
            <div className="content-style">
      <h3>Yes, you!! Become an symbiose of machine learning and your creativity
</h3>
    </div>
    <div className="content-style">
      <h3>The tool to live on the beach
</h3>
    </div>
    <div className="content-style">
      <h3>Multi-dimensional todo list? Here you go!
</h3>
    </div>
    <div className="content-style">
      <h3>Organize your life in a new type of thought gathering process
</h3>
    </div>
    <div className="content-style">
      <h3>Manage teams via individualism, freedom, not corporate structure and hierarchy
</h3>
    </div>
    <div className="content-style">
      <h3>We are built on top of hierarchy, the free one!
</h3>
    </div>
    <div className="content-style">
      <h3>Open sourcing thoughts
</h3>
    </div>
    <div className="content-style">
      <h3>Build things together, brings what you have already built as a resource
</h3>
    </div>
    <div className="content-style">
      <h3>Idea mining
</h3>
    </div>
    <div className="content-style">
      <h3>Distributed project management
</h3>
    </div>
    <div className="content-style">
      <h3>Prognostic problem solving
</h3>
    </div>
    <div className="content-style">
      <h3>Crypto communism
</h3>
    </div>
    <div className="content-style">
      <h3>It is like a Mendeleev table but better, since you can create a Mendeleev table yourself
</h3>
    </div>
    <div className="content-style">
      <h3>We are a global suppliers of webhook links - supplier publishes an event and everyone else listens (including machines who are themselves are data structures)
</h3>
    </div>
            </Carousel>
        );
    }
}

export default Presentation;
