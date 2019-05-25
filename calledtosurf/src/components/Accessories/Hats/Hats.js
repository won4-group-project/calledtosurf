import React, { Component } from "react";
import axios from "axios";
import { Card, Container, Row, CardDeck, Col } from "react-bootstrap";
import "../../Shoes/shoes.css";
import filter from "../../../assets/Icons/filter.png";
// import "../accessories.css";
class Hats extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    // this.getShoeList = this.getShoeList.bind(this);
  }

  componentDidMount() {
    const category = "Hats";
    console.log("category", category);

    axios.get(`/api/category/${category}`).then(res => {
      console.log("hats", res.data);

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
          <div className="collection-filter">
            <div className="filter_item">
              <img alt="filter" src={filter} className="filter_img" />
              Filter
            </div>
            <div className="item_count">35 products</div>
            <div className="item_sort">Sort</div>
          </div>

          <div className="shoes_div">
            {this.state.products.map(product => (
              <Row
                className="shoes_div"
                border="default"
                id={product.product_id}
              >
                <Col className="img_div">
                  <a href="">
                    <img
                      alt="poster"
                      src={`/${product.img}`}
                      onMouseOver={e =>
                        (e.currentTarget.src = `/${product.alt_img}`)
                      }
                      onMouseOut={e =>
                        (e.currentTarget.src = `/${product.img}`)
                      }
                      onClick={() => this.goToCarddetails(product.product_id)}
                    />
                    <div className="grid-product__meta">
                      <div className="grid-product__title grid-product__title--body">
                        {product.title}
                      </div>
                      <div className="grid-product__price">
                        ${product.price}.00
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

export default Hats;
