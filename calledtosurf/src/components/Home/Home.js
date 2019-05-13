import React, { Component } from "react";
import sneakers from "../../assets/Shoes/Sneakers/77a.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-content">
        <div className="shogun-root">
          <div className="shg-box-vertical-align-wrapper">
            {/* <img alt="img" src={sneakers} /> */}
            <div className="shg-box shg-c    shg-box-vertical-align-center">
              <div className="shg-box-overlay" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
