import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../Clothing/clothing.css";
import boots from "../../assets/Shoes/Boots/58a.jpg";
import heels from "../../assets/Shoes/Heels/61a.jpg";
import sandals from "../../assets/Shoes/Sandals/75b.jpg";
import sneakers from "../../assets/Shoes/Sneakers/77a.jpg";
import filter from "../../assets/Icons/filter.png";
import dress from "../../assets/Clothing/dress_collection.jpg";
import tops from "../../assets/Clothing/top_collection.jpg";
import bottom from "../../assets/Clothing/bottom_collection.jpg";
import swim from "../../assets/Clothing/swim_collection.jpg";

class Clothing extends Component {
  constructor() {
    super();
    this.state = {
      shoes: []
    };
    this.getShoeList = this.getShoeList.bind(this);
  }

  componentDidMount() {
    this.getShoeList();
  }

  getShoeList() {
    axios.get("/api/shoes").then(res => {
      console.log("shoesssss" + res.data);

      this.setState({ shoes: res.data });
    });
  }
  render() {
    return (
      <Container className="shoe_container">
        <div>
          <Row>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={dress} />
                <span className="collection_title"> Dresses</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={tops} />
                <span className="collection_title"> Tops</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={bottom} />
                <span className="collection_title"> Bottoms</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={swim} />
                <span className="collection_title"> Swimwear</span>
              </a>
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
            {this.state.shoes.map(shoe => (
              <Row className="shoes_div" border="default" id={shoe.product_id}>
                <Col className="img_div">
                  <a href="">
                    <img alt="poster" src={sandals} />
                    <div className="grid-product__meta">
                      <div className="grid-product__title grid-product__title--body">
                        {shoe.title}
                      </div>
                      <div className="grid-product__price">
                        ${shoe.price}.00
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
