import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor() {
    super();


  }

  render() {
    const {inventory} = this.props
    const mappedProducts = inventory.map((product) => (
      <div className="intList" key= {product.id}>
        <img src={product.image} />
        <div>Product Name: {product.product_name}</div>
        <div>Price $ {product.price}</div>
      </div>
    ));
    return (
      <div>
        <Product products = {mappedProducts} />
      </div>
    );
  }
}
