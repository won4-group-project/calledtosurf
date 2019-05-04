import React, { Component } from "react";
import axios from "axios";
class Accessories extends Component {
  constructor() {
    super();
    this.state = {
      accessories: []
    };
    this.getAccessoryList = this.getAccessoryList.bind(this);
  }

  componentDidMount() {
    this.getAccessoryList();
  }

  getAccessoryList() {
    axios.get("/api/accessories").then(res => {
      console.log("shoesssss" + res.data);

      this.setState({ accessories: res.data });
    });
  }
  render() {
    let list = this.state.accessories.map(accessory => (
      <ul key={accessory.product_id}>
        <li>
          {accessory.title} {accessory.category}
        </li>
      </ul>
    ));

    return <div> {list}</div>;
  }
}

export default Accessories;
