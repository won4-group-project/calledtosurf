import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../Clothing/clothing.css";
import { Link } from "react-router-dom";

import filter from "../../assets/Icons/filter.png";

class Clothing extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const mainCategory = "Clothings";
    console.log("mainCategory", mainCategory);
    axios.get(`/api/categories/${mainCategory}`).then(res => {
      console.log("Accessories", res.data);

      this.setState({ products: res.data });
    });
  }

  goToCarddetails = product_id => {
    console.log("id" + product_id);
    localStorage.setItem("selectedCard", product_id);
    this.props.history.push(`/details/${product_id}`);
  };

  render() {
    return (
      <Container className="shoe_container">
        <div>
          <Row>
            <Col className="zoom">
              <Link to="/dresses" className="collection_item">
                <img alt="poster" src={`/Clothing/dress_collection.jpg`} />
                <span className="collection_title"> Dresses</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/tops" className="collection_item">
                <img alt="poster" src={`/Clothing/top_collection.jpg`} />
                <span className="collection_title"> Tops</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/bottoms" className="collection_item">
                <img alt="poster" src={`/Clothing/bottom_collection.jpg`} />
                <span className="collection_title"> Bottoms</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/swim" className="collection_item">
                <img alt="poster" src={`/Clothing/swim_collection.jpg`} />
                <span className="collection_title"> Swimwear</span>
              </Link>
            </Col>
          </Row>
          <div className="collection-filter">
            <div className="filter_item">
              <img alt="filter" src={filter} className="filter_img" />
              Filter
            </div>
            <div className="item_count">35 products</div>
            <div className="item_sort">Sort</div>
          </div>

          <div className="shoes_div">
            {this.state.products.map(clothing => (
              <Row
                className="shoes_div"
                border="default"
                key={clothing.product_id}
              >
                <Col className="img_div">
                  <a href="">
                    <img
                      alt="poster"
                      src={`/${clothing.img}`}
                      onMouseOver={e =>
                        (e.currentTarget.src = `/${clothing.alt_img}`)
                      }
                      onMouseOut={e =>
                        (e.currentTarget.src = `/${clothing.img}`)
                      }
                      onClick={() => this.goToCarddetails(clothing.product_id)}
                    />
                    <div className="grid-product__meta">
                      <div className="grid-product__title grid-product__title--body">
                        {clothing.title}
                      </div>
                      <div className="grid-product__price">
                        ${clothing.price}.00
                      </div>
                    </div>
                  </a>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}
export default Clothing;
