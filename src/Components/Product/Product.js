import React from "react";

function Product(props) {
  const {product, deleteInventory} = props
  return (
    <div className="product">
      <img src={product.image} alt="shoe"/>
      <div>
        <h2>{product.product_name}</h2>
        <h2>${product.price}</h2>

        <div className="btsm">
        <button id="edit">Edit</button>
        <button id="delete" onClick={()=> deleteInventory(product.id)} >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
