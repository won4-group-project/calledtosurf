import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import './ShoeThree.css';
import ShoeImgThree from '../../../assets/ShoeImages/Shoes3.png';

const ShoeThree = props => {

    return (
        <div className="container flex-ctr-col" >
            <a href="#"><img id="img-container" src={ShoeImgThree} width="1000" alt="fashion"></img></a>
            <div id="position-1" className="shopNow">
                <h1>This is a Title</h1>
                <h3>This is sub-text</h3>
                <a href="#" id="btn-style-dressOne">Shop Now</a>
            </div>
        </div>
    );
}

export default ShoeThree;