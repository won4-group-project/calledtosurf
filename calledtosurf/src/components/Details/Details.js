import React, { Component } from "react";
import "../../components/Details/details.css";
import facebook from "../../assets/Icons/fb.png";
import twitter from "../../assets/Icons/twitter.png";
import pinterest from "../../assets/Icons/pinterest.png";
import axios from "axios";
// import heels from "../../assets/Shoes/Heels/61a.jpg";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }

  componentDidMount() {
    let id = localStorage.getItem("selectedCard");
    console.log("shoes ", id);
    axios.get(`/api/shoes/${id}`).then(res => {
      console.log("shoe details", res.data);
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <div className="page-content page-content--product">
        {this.state.product.map(shoe => (
          <div className="page-width">
            <div
              className="grid grid--product-images-right"
              key={shoe.product_id}
            >
              <div className="grid__item medium-up--two-fifths">
                <div className="product-single__meta">
                  <h2 className="h2 product-single__title">{shoe.title}</h2>
                  <div className="price">
                    <span className="product__price">${shoe.price}.00</span>
                  </div>
                  <div className="product_size">
                    <span className="product_size">size</span>
                  </div>

                  <div className="size">
                    <span className="product__size">6</span>
                    <span className="product__size">{shoe.sizes}</span>
                    <span className="product__size">7</span>
                    <span className="product__size">7.5</span>
                    <span className="product__size">8</span>
                    <span className="product__size">8.5</span>
                  </div>
                  <div className="to_cart">
                    {" "}
                    <button className="add_to_cart">Add to cart</button>
                  </div>
                  <div className="description">
                    <span className="product_desc"> {shoe.description}</span>
                  </div>
                  <div className="social">
                    <img alt="fb" src={facebook} className="social_icon" />
                    <span>Share</span>
                    <img alt="fb" src={twitter} className="social_icon" />
                    <span>Tweet</span>
                    <img alt="fb" src={pinterest} className="social_icon" />
                    <span>Pin it</span>
                  </div>
                </div>
              </div>
              <div className="grid__item medium-up--three-fifths">
                <div className="product__photos product__photos-2087222771805 product__photos--beside">
                  <div className="product__main-photos aos-init aos-animate">
                    <div className="slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div className="image-wrap">
                            <div className="photo-zoom-link photo-zoom-link--enable">
                              <img
                                alt="img"
                                src={`/${shoe.img}`}
                                className="lazyautosizes lazyloaded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__thumbs product__thumbs--beside small--hide aos-init aos-animate slick-initialized slick-slider slick-vertical">
                    <div className="slick-list draggable">
                      <div className="slick-track">
                        <div className="product__thumb-item slick-slide">
                          <div className="image-wraper">
                            <div className="product__thumb product__thumb-2087222771805 js-no-transition">
                              <img
                                alt=""
                                src={`/${shoe.alt_img}`}
                                class="animation-delay-3 lazyautosizes lazyloaded"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="product__thumb-item slick-slide">
                          <div className="image-wraper">
                            <div className="product__thumb product__thumb-2087222771805 js-no-transition">
                              <img
                                alt=""
                                src={`/${shoe.img}`}
                                class="animation-delay-3 lazyautosizes lazyloaded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Details;
