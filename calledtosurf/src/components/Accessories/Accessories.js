import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../Accessories/accessories.css";
import glasses from "../../assets/Accessories/Glasses/glasses.jpg";
import hats from "../../assets/Accessories/Hats/94b.jpg";
import purses from "../../assets/Accessories/Purses/115b.jpg";
import jewelry from "../../assets/Accessories/Jewlery/jewelry.jpg";
import filter from "../../assets/Icons/filter.png";
import img2 from "../../assets/Accessories/Purses/115a.jpg";
class Accessories extends Component {
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
                <img alt="poster" src={glasses} />
                <span className="collection_title"> Sunglasses</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={hats} />
                <span className="collection_title"> Hats</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={purses} />
                <span className="collection_title"> Purses</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={jewelry} />
                <span className="collection_title"> jewelry</span>
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
                    <img
                      alt="poster"
                      src={purses}
                      onMouseOver={e => (e.currentTarget.src = img2)}
                      onMouseOut={e => (e.currentTarget.src = purses)}
                    />
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

export default Accessories;
