import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../Shoes/shoes.css";
import boots from "../../assets/Shoes/Boots/58a.jpg";
import heels from "../../assets/Shoes/Heels/61a.jpg";
import sandals from "../../assets/Shoes/Sandals/75b.jpg";
import sneakers from "../../assets/Shoes/Sneakers/77a.jpg";
import filter from "../../assets/Icons/filter.svg";
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
  render() {
    return (
      // <Container className="shoe_container">
      //   {this.state.shoes.map(shoe => (
      //     <Card
      //       border="default"
      //       style={{ width: "13rem" }}
      //       id={shoe.product_id}
      //     >
      //       <Card.Body>
      //         <div className="zoom">
      //           <img
      //             alt="poster"
      //             width="170"
      //             src="https://cdn.shopify.com/s/files/1/3000/9920/products/cts-shoes-159_180x.jpg"
      //             // className="img_container"
      //           />
      //         </div>
      //       </Card.Body>
      //     </Card>
      //   ))}
      // </Container>
      <Container className="shoe_container">
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
          <div className="filter_item">products</div>
        </div>
      </Container>
    );
  }
}

export default Shoes;
