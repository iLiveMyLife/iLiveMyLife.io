import React from "react";
import './PaymentItem.css'

const PaymentItem = (props) => {



    return (
        <div style={props.styleCard} className = "payment-card">
            <div style={props.styleLabel} className = "payment-card__label">
                <h2>{props.label}</h2>
            </div>
            <div className = "payment-card__description">
                <ul className = "payment-card__list">
                    {props.features.map(item => (
                        <li style={props.styleFeature} className = "payment-card__feature">{item}</li>
                    ))}
                </ul>
            </div>
            <div style={props.styleSubscribe} className = "payment-card__subscribe">
                <a style={props.styleBtn} href="./">{props.button}</a>
            </div>
        </div>
    );

}

export default PaymentItem;