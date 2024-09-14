import React from "react";
import SubscriptionItem from "./SubscriptionItem";
import "./Payment.css"

const Payment = () => {

    const categories = [
        {
            id: '0',
            label: 'Individual',
            features: ['I am the empowered individual', 'I collect knowledge about myself', 'I share my data with whoever I want to'],
            functionalities: ['Lifebot without context awareness', 'basic AI model'],
            price: "Free",
            button: 'Vote'
        },
        {
            id: '1',
            label: 'Partner',
            features: ['I share my ideas and knowledge with others', 'I run projects and companies together with the community', 'I believe that knowledge should be free'],
            functionalities: ['Lifebot with context awareness', 'GPT-4o mini model', 'advanced notifications'],
            price: "$10 USD monthly",
            button: 'Give'
        },
        {
            id: '2',
            label: 'Leader',
            features: ['I care about the community', 'I am an entrepreneur', 'I drive innovation', 'People trust me and appreciate my effort'],
            functionalities: ['Lifebot with context awareness', 'GTP-4o model', 'establish Contacts with people from the node', 'advanced notifications', 'webhooks'],
            price: "$100 USD monthly",
            button: 'Claim'
        },
        {
            id: '3',
            label: 'Investor',
            features: ['I am an individual', 'I am a partner', 'I am a leader'],
            functionalities: ['Lifebot with context awareness', 'GTP-4o model', 'establish Contacts with people from the node', 'advanced notifications', 'webhooks', 'personal node with CEO'],
            price: "$1000 USD yearly",
            button: 'Help Building'
        }
    ]

    return (
        <div>
            <h1>Choose yourself...</h1>
            <div className = "subscriptionContainer">
                <SubscriptionItem
                    styleLabel = {{background: "#00B7FF"}}
                    styleFeature = {{"--hover-colorFeature": "#00B7FF"}}
                    {...categories[0]}
                />
                <SubscriptionItem
                    styleLabel = {{background: "#61BD9E"}}
                    styleFeature = {{"--hover-colorFeature": "#61BD9E"}}
                    {...categories[1]}
                />
                <div className = "line-break"></div>
                <SubscriptionItem
                    styleLabel = {{background: "#E09200"}}
                    styleFeature = {{"--hover-colorFeature": "#E09200"}}
                    {...categories[2]}
                />
                <SubscriptionItem
                    styleLabel = {{background: "#AE2012"}}
                    styleFeature = {{"--hover-colorFeature": "#AE2012"}}
                    {...categories[3]}
                />
            </div>

        </div>
    )
}

export default Payment;
