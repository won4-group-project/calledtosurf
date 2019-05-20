import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../../Shoes/shoes.css";
import filter from "../../../assets/Icons/filter.png";

class Shoes extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    // this.getShoeList = this.getShoeList.bind(this);
  }

  componentDidMount() {
    const category = "Boots";
    console.log("category", category);

    axios.get(`/api/category/${category}`).then(res => {
      console.log("boots", res.data);

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
      <Container>
        <div>
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
              <Row className="shoes_div" border="default" id={shoe.product_id}>
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

export default Shoes;
