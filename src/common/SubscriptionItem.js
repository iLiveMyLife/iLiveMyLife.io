import React from "react";
import './SubscriptionItem.css'
import Ilmlbutton from "../ilmlbutton/Ilmlbutton";

const SubscriptionItem = (props) => {

    const onClickHandler = (id) => {
        const url = `https://app.ilivemylife.io/subscription${id}`;
        window.open(url, '_blank');
    }

    return (
        <div style={props.styleCard} className = "subscriptionCard">
            <div style={props.styleLabel} className = "subscriptionCardLabel">
                <h2>{props.label}</h2>
            </div>
            <div className = "subscriptionCardDescription">
                <ul className = "subscriptionCardList">
                    {props.features.map((item, index) => (
                        <li key={index} style={props.styleFeature} className = "subscriptionCardFeature">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="subscriptionCardSubscribe">
                <Ilmlbutton text={props.button} className="btn1" onClick={() => onClickHandler(props.id)} />
            </div>
        </div>
    );

}

export default SubscriptionItem;
