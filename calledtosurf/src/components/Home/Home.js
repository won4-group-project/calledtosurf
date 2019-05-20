
import React, { Component } from "react";
import './Home.css';
import CardA from '../Home/ProductLinkCard/Images/1a.png';
import CardB from '../Home/ProductLinkCard/Images/2a.png';
import CardC from '../Home/ProductLinkCard/Images/3a.png';
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
            <div className="container flex-ctr-col">
                <Slideshow
                    slides={this.state.GroupA}
                />
                <section id="links" className="flex-ctr-row">
                    <ProductLinkCard
                        src={CardA}
                        alt="Link to product page"
                        btnLabel="Dress"
                    />
                    <ProductLinkCard
                        src={CardB}
                        alt="Link to product page"
                        btnLabel="shoes"
                    />
                    <ProductLinkCard
                        src={CardC}
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
