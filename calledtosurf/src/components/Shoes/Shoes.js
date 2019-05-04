import React, { Component } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import "../Shoes/shoes.css";
import img from "../Shoes/images/cts-shoes-158_1800x1800.jpg";
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
      <Container className="shoe_container">
        {this.state.shoes.map(shoe => (
          <Card
            border="default"
            style={{ width: "13rem" }}
            id={shoe.product_id}
          >
            <Card.Body>
              <img
                alt="poster"
                width="170"
                src="https://cdn.shopify.com/s/files/1/3000/9920/products/cts-shoes-159_180x.jpg"
                className="img_container"
              />
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

export default Shoes;
