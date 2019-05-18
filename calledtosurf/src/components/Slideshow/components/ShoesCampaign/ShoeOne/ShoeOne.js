import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import './ShoeOne.css';
import ShoeImgOne from '../../../assets/ShoeImages/shoes1.png';

const ShoeOne = props => {

    return (
        <div className="container flex-ctr-col" >
            <a href="#"><img id="img-container" src={ShoeImgOne} width="1300" alt="fashion"></img></a>
            <div id="position-1" className="shopNow">
                <h1>This is a Title</h1>
                <h3>This is sub-text</h3>
                <a href="#" id="btn-style-dressOne">Shop Now</a>
            </div>
        </div>
    );
}

export default ShoeOne;