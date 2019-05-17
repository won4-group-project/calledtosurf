import React, { Component } from "react";
import "../../components/Details/details.css";
import Shoes from "../Shoes/Shoes";
import axios from "axios";
import heels from "../../assets/Shoes/Heels/61a.jpg";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
  }

  componentDidMount() {
    let id = localStorage.getItem("selectedCard");
    console.log("shoes " + id);

    axios.get(`/api/shoes/${id}`).then(res => {
      console.log(res.data);

      this.setState({ shoes: res.data });
    });
  }

  render() {
    const shoe = this.state.shoes;
    return (
      <div className="page-content page-content--product">
        <div className="page-width">
          <div className="grid grid--product-images-right">
            <div className="grid__item medium-up--two-fifths">
              <div className="product-single__meta" key={shoe.product_id}>
                <img alt="img" src={`/instagram.png`} />
                {/* <img src={require("../../assets/Clothing/Dresses/1a.png")} /> */}

                {/* ${shoe.img}`} /> */}
                {shoe.id}
                <h2 className="h2 product-single__title">{shoe.title}</h2>
                <div className="price">
                  <span className="product__price">{shoe.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
