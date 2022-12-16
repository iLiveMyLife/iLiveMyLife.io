import React from "react";
import PaymentItem from "./PaymentItem";
import "./Payment.css"

const Payment = () => {

    const categories = [
        {
            id: '0',
            label: 'Individual',
            features: ['I am the empowered individual', 'I collect knowledge about myself', 'I share my data with whoever I want to'],
            button: 'Free'
        },
        {
            id: '1',
            label: 'Partner',
            features: ['I share my ideas and knowledge with others', 'I run projects and companies together with the community', 'I believe that knowledge should be free'],
            button: 'Subscribe'
        },
        {

            id: '2',
            label: 'Leader',
            features: ['I care about the community', 'I am an entrepreneur', 'I drive innovation', 'People trust me and appreciate my effort'],
            button: 'Subscribe'
        },
        {
            id: '3',
            label: 'Investor',
            features: ['I am an individual', 'I am a partner', 'I am a leader'],
            button: 'Subscribe'
        }
    ]


    return (
        <div>
            <h1>Choose the right plan for you...</h1>
            <div className = "payment-container">
                <PaymentItem
                    styleLabel = {{background: "#00B7FF"}}
                    styleBtn = {{color: "#00B7FF", border: "1px solid #00B7FF", "--hover-background":"#00B7FF"}}
                    styleFeature = {{"--hover-colorFeature": "#00B7FF"}}
                    {...categories[0]}
                />
                <PaymentItem
                    styleLabel = {{background: "#61BD9E"}}
                    styleBtn = {{color: "#61BD9E", border: "1px solid #61BD9E", "--hover-background":"#61BD9E"}}
                    styleFeature = {{"--hover-colorFeature": "#61BD9E"}}
                    {...categories[1]}
                />
                <div className = "line-break"></div>
                <PaymentItem
                    styleLabel = {{background: "#E09200"}}
                    styleBtn = {{color: "#E09200", border: "1px solid #E09200", "--hover-background":"#E09200"}}
                    styleFeature = {{"--hover-colorFeature": "#E09200"}}
                    {...categories[2]}
                />
                <PaymentItem
                    styleLabel = {{background: "#AE2012"}}
                    styleBtn = {{color: "#AE2012", border: "1px solid #AE2012", "--hover-background":"#AE2012"}}
                    styleFeature = {{"--hover-colorFeature": "#AE2012"}}
                    {...categories[3]}
                />
            </div>

        </div>
    )
}

export default Payment;
