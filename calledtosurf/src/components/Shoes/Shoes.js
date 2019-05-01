import React, { Component } from "react";
import "./shoes.css";
import axios from "axios";
class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: []
    };
    this.getShoeList = this.getShoeList.bind(this);
  }

  componentDidMount() {
    this.getShoeList();
  }

  getShoeList() {
    axios.get("/api/shoelist").then(res => {
      this.setState({ shoes: res.data });
      console.log("shoes" + res);
    });
  }
  render() {
    return <div> shoes</div>;
  }
}

export default Shoes;
