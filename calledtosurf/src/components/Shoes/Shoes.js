import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../Shoes/shoes.css";
import boots from "../../assets/Shoes/Boots/58a.jpg";
import heels from "../../assets/Shoes/Heels/61a.jpg";
import sandals from "../../assets/Shoes/Sandals/75b.jpg";
import sneakers from "../../assets/Shoes/Sneakers/77a.jpg";
import filter from "../../assets/Icons/filter.png";
import next from "../../assets/Icons/next.png";
class Shoes extends Component {
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
              <a href="" className="collection_item">
                <img alt="poster" src={boots} />
                <span className="collection_title"> Boots</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={heels} />
                <span className="collection_title"> Heels</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={sandals} />
                <span className="collection_title"> Sandals</span>
              </a>
            </Col>
            <Col className="zoom">
              <a href="" className="collection_item">
                <img alt="poster" src={sneakers} />
                <span className="collection_title"> Sneakers</span>
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
                      src={sandals}
                      onMouseOver={e => (e.currentTarget.src = sneakers)}
                      onMouseOut={e => (e.currentTarget.src = sandals)}
                      onClick={() => this.goToCarddetails(shoe.product_id)}
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
          {/* <div className="pagination">
            <span className="page ">1</span>
            <span className="page ">2</span>
            <span className="page ">3</span>
            <span className="next ">
              <img alt="next" src={next} />
            </span>
          </div> */}
        </div>
      </Container>
    );
  }
}

export default Shoes;
