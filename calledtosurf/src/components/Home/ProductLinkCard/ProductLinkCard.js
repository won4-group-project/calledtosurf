

import React from 'react';
import '../ProductLinkCard/ProductLinkCard.css';
import { Card, Button } from "react-bootstrap";


const ProductLinkCard = props => {

    return (
        <div className="product-card-link">
        <div className="flex-ctr-col">
            <img src={props.src} width="350" alt={props.alt}></img>
            <button>{props.btnLabel}</button>
        </div> 
        </div>       
    );
}

export default ProductLinkCard;