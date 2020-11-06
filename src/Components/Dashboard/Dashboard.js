import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        {
          imgUrl: "imgURL",
          productName: "hats",
          price: 0,
        },
      ],
    };
  }

  render() {
    // const {inventory} = this.props
    const mappedProducts = this.state.inventory.map((product) => (
      <div>
        <div>Image URL {product.imgUrl}</div>
        <div>Image URL {product.imgUrl}</div>
        <div>Image URL {product.imgUrl}</div>
      </div>
    ));
    return (
      <div>
        This is the Dashboard
        <div>{mappedProducts}</div>
        <Product />
      </div>
    );
  }
}
