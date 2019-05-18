

import React from 'react';
// import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import './Hero.css';


const Hero = props => {

    return (
        <div id={props.id} className="hero flex-ctr-col" >
            <div id="shopNow">
                <h1>{props.title}</h1>
                <h3>{props.subText}</h3>
                <button>{props.name}</button>
            </div>

        </div>
    );
}


export default Hero;

