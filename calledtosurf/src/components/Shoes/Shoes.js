import React, { Component } from "react";
import "./shoes.css";
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
    this.state.shoes.map(shoe => (
      <tr key={shoe.product_id}>
        <td>{shoe.title}</td>
      </tr>
    ));

    return <div> hello</div>;
  }
}

export default Shoes;
