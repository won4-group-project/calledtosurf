
import React, { Component } from "react";
// import axios from "axios";
import './Home.css';
import Hero from '../Home/Hero/Hero';
// import ProductLinkCard from '../Home/ProductLinkCard/ProductLinkCard';
import OneA from '../../assets/Clothing/Dresses/1a.png';
import '../Global/Global.css';
import Slideshow from '../Slideshow/components/Slideshow/Slideshow';
import DressOne from '../Slideshow/components/DressCampaign/DressOne/DressOne';
import DressTwo from '../Slideshow/components/DressCampaign/DressTwo/DressTwo';
import DressThree from '../Slideshow/components/DressCampaign/DressThree/DressThree';
import  ShoeOne from '../Slideshow/components/ShoesCampaign/ShoeOne/ShoeOne';
import  ShoeTwo from '../Slideshow/components/ShoesCampaign/ShoeTwo/ShoeTwo';
import  ShoeThree from '../Slideshow/components/ShoesCampaign/ShoeThree/ShoeThree';
import ProductLinkCard from "./ProductLinkCard/ProductLinkCard";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            GroupA: [<DressOne />, <DressTwo />, <DressThree />],
            GroupB: [<ShoeOne />, <ShoeTwo />, <ShoeThree />]
          }
    }
    render() {

        return (
            <div className="flex-ctr-col">
                <Slideshow
                    slides={this.state.GroupA}
                />
                <section id="links" className="flex-ctr-row">
                    <ProductLinkCard
                        src={OneA}
                        alt="Link to product page"
                        btnLabel="Dress"
                    />
                    <ProductLinkCard
                        src={OneA}
                        alt="Link to product page"
                        btnLabel="shoes"
                    />
                    <ProductLinkCard
                        src={OneA}
                        alt="Link to product page"
                        btnLabel="accessories"
                    />
                </section>
                <Slideshow
                    slides={this.state.GroupB}
                />
            </div>
        );
    }
}

export default Home;
