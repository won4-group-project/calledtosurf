import React, { Component } from "react";
import axios from "axios";
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
    let list = this.state.shoes.map(shoe => (
      <ul key={shoe.product_id}>
        <li>
          {shoe.title} {shoe.category}
        </li>
      </ul>
    ));

    return <div> {list}</div>;
  }
}

export default Shoes;
