import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import './DressTwo.css';
import ImageTwo from '../../../assets/DressImages/dress2.png';

const DressTwo = props => {

    return (
        <div className="container flex-ctr-col" >
        <a href="#" ><img id="img-container" src={ImageTwo} width="1000" alt="fashion"></img></a>
        <div id="position-2" className="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <a href="#" >Shop Now</a>
        </div>
    </div>
    );
}

export default DressTwo;