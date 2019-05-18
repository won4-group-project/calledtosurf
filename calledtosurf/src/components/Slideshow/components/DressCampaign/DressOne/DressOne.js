import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import './DressOne.css';
import ImageOne from '../../../assets/DressImages/dress.png';

const DressOne = props => {

    return (
        <div className="container flex-ctr-col" >
            <a href="#"><img id="img-container" src={ImageOne} width="1000" alt="fashion"></img></a>
            <div id="position-1" className="shopNow">
                <h1>This is a Title</h1>
                <h3>This is sub-text</h3>
                <a href="#" id="btn-style-dressOne">Shop Now</a>
            </div>
        </div>
    );
}

export default DressOne;