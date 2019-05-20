import React from 'react';
import '../../SlideShowStyles/SlideShowStyles.css';
import '../DressThree/DressThree.css';
import ImageThree from '../../../assets/DressImages/placeholder3.png';

const DressThree = props => {

    return (
        <div className="container flex-ctr-col" >
         <img id="img-container" src={ImageThree} width="1000" alt="fashion"></img>
        <div id="position-3" className="shopNow">
            <h1>This is a Title</h1>
            <h3>This is sub-text</h3>
            <button>Shop Now</button>
        </div>
    </div>
    );
}

export default DressThree;