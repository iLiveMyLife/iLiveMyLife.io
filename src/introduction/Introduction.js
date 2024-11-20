import React, { Component } from 'react';
import './Introduction.css';
import { GlobalOutlined } from '@ant-design/icons';
import {Helmet} from "react-helmet";

class Introduction extends Component {
    state={}

    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>iLiveMyLife - Life Management with Interactive Knowledge Graph</title>
                    <meta name="description" content="Dive into iLiveMyLife and discover the possibilities of an interactive knowledge graph for project and personal life management." />
                </Helmet>
                <div className="introduction-header">
                    <h2>
                        <GlobalOutlined /> Welcome to <strong>iLiveMyLife</strong> &mdash; Embark on a Journey of Discovery with Our Interactive Knowledge Graph! <GlobalOutlined />
                    </h2>
                </div>
                <p>Hello Explorers,</p>
                <p>Are you driven by curiosity, eager to uncover new realms of knowledge and broaden your horizons? If so, brace yourself for an exceptional experience with <strong>iLiveMyLife</strong>!</p>
                <p><strong>iLiveMyLife ...and so do you</strong>. This phrase is more than a slogan; it's a testament to the collective journey and social impact achievable through collaboration on our platform.</p>
                <p><strong>iLiveMyLife</strong> is your revolutionary platform &mdash; an interactive Knowledge Graph that begins with a central node called "My Life." This dynamic platform empowers you to navigate through a web of interconnected knowledge nodes, forging connections and shaping your intellectual adventure.</p>
                <h3>What's a Knowledge Graph Anyway?</h3>
                <p>Picture a boundless universe of information meticulously organized into a vast network of nodes. Each node encapsulates an idea, concept, or topic. What's fascinating? You have the power to add to this ever-growing tapestry of knowledge.</p>
                <h3>Here's How it Works:</h3>
                <ol>
                    <li><strong>Embark from "My Life":</strong> Your journey commences from your personalized root node, "My Life," part of <strong>iLiveMyLife</strong>. This canvas is where your experiences, interests, and passions intertwine.</li>
                    <li><strong>Forge and Unite Nodes:</strong> Delve deeper into your passions by creating new nodes or weaving connections with existing ones. Every node opens the gateway to a unique realm of knowledge within <strong>iLiveMyLife</strong>.</li>
                    <li><strong>Participate in Meaningful Dialogues:</strong> Dive into knowledge through interactive discussions attached to each node. Collaborate with kindred spirits, share insights, and ignite transformative ideas. Together, we learn and grow.</li>
                </ol>
                <h3>Why Join Us?</h3>
                <ul>
                    <li><strong>Expand Horizons with iLiveMyLife:</strong> Immerse yourself in a sea of boundless knowledge, unveiling fresh perspectives with every click.</li>
                    <li><strong>Express Your Essence:</strong> Illuminate your thoughts, interests, and expertise through custom nodes, telling your unique story.</li>
                    <li><strong>Connect and Collaborate:</strong> Engage in lively dialogues with fellow enthusiasts who share your passions and curiosities.</li>
                </ul>
                <p><strong>Join the Exploration Today with iLiveMyLife!</strong></p>
                <p>We're thrilled to welcome you to this vibrant and intellectually stimulating community. Your odyssey commences with "My Life," and from there, the possibilities with <strong>iLiveMyLife</strong> are limitless!</p>
                <p>Ready to take the plunge? Simply <a className="cta-button" href="https://app.iLiveMyLife.io">click here</a> to embark on your journey with <strong>iLiveMyLife</strong>. Explore, learn, and shape the ever-expanding web of knowledge.</p>
                <p>Questions or ideas? We're all ears! Feel free to respond to this email or kickstart a conversation on the <strong>iLiveMyLife</strong> platform.</p>
                <p>Let's embark on an awe-inspiring journey of shared wisdom!</p>
                <p>Warm regards,</p>
                <p>Ilya Sorokin</p>
            </div>
        );
    }
}
export default Introduction;
