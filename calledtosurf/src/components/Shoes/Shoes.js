import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../Shoes/shoes.css";
import { Link } from "react-router-dom";

import filter from "../../assets/Icons/filter.png";
class Shoes extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const mainCategory = "Shoes";

    axios.get(`/api/categories/${mainCategory}`).then(res => {
      console.log("shoesssss", res.data[0]);

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
              <Link to="/boots" className="collection_item">
                <img alt="poster" src={`/Shoes/Boots/58a.jpg`} />
                <span className="collection_title"> Boots</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/heels" className="collection_item">
                <img alt="poster" src={`/Shoes/Heels/61a.jpg`} />
                <span className="collection_title"> Heels</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/sandals" className="collection_item">
                <img alt="poster" src={`/Shoes/Sandals/75b.jpg`} />
                <span className="collection_title"> Sandals</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/sneakers" className="collection_item">
                <img alt="poster" src={`/Shoes/Sneakers/77a.jpg`} />
                <span className="collection_title"> Sneakers</span>
              </Link>
            </Col>
          </Row>
        </div>

        <div className="collection-filter">
          <div className="filter_item">
            <img alt="filter" src={filter} className="filter_img" />
            Filter
          </div>
          <div className="item_count">35 products</div>
          <div className="item_sort">Sort</div>
        </div>

        <div className="shoes_div">
          {this.state.products.map(shoe => (
            <Row className="shoes_div" border="default" key={shoe.product_id}>
              <Col className="img_div">
                <a href="">
                  <img
                    alt="poster"
                    src={`/${shoe.img}`}
                    onMouseOver={e =>
                      (e.currentTarget.src = `/${shoe.alt_img}`)
                    }
                    onMouseOut={e => (e.currentTarget.src = `/${shoe.img}`)}
                    onClick={() => this.goToCarddetails(shoe.product_id)}
                  />
                  <div className="grid-product__meta">
                    <div className="grid-product__title grid-product__title--body">
                      {shoe.title}
                    </div>
                    <div className="grid-product__price">${shoe.price}.00</div>
                  </div>
                </a>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    );
  }
}

export default Shoes;
