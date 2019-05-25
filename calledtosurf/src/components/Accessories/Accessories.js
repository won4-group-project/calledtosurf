import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "../Accessories/accessories.css";
import filter from "../../assets/Icons/filter.png";
import { Link } from "react-router-dom";
class Accessories extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const mainCategory = "Accessories";
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
              <a href="" className="collection_item">
                <img alt="poster" src={`/Accessories/Glasses/glasses.jpg`} />
                <span className="collection_title"> Sunglasses</span>
              </a>
            </Col>
            <Col className="zoom">
              <Link to="/hats" className="collection_item">
                <img alt="poster" src={`/Accessories/Hats/94b.jpg`} />
                <span className="collection_title"> Hats</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/purses" className="collection_item">
                <img alt="poster" src={`/Accessories/Purses/115b.jpg`} />
                <span className="collection_title"> Purses</span>
              </Link>
            </Col>
            <Col className="zoom">
              <Link to="/jewelry" className="collection_item">
                <img alt="poster" src={`/Accessories/Jewlery/jewelry.jpg`} />
                <span className="collection_title"> jewelry</span>
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
