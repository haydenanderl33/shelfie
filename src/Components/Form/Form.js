import axios from "axios";
import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      image: "",
      product_name: "",
      price: ""
    };
  }



  

  addInventory = () => {
      const {image,product_name,price} = this.state;
      axios.post("/api/inventory", {product_name, image, price})
      .then(this.props.history.push('/'))
      .catch(err => console.log(err))
      
  }

  cancelInput = () => {
    this.setState({
      image: "",
      product_name: "",
      price: ""
    })
  }
  cancelEditInput = () => this.props.history.push('/');

  componentDidUpdate(prevProps){
    const {product} = this.props
    if(prevProps.product !== product)
    this.setState({
      image: product.image,
      product_name: product.product_name,
      price: product.price
    })
  }

  editInventory = (id) => {
    const {image,product_name,price} = this.state;
    axios.put(`/api/inventory/${id}`, {product_name, image, price})
    .then(this.props.history.push('/'))
    .catch(err => console.log(err))
  }




handleAllInputs = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  }) 
  // console.log([event.target.name])
}

  render() {
    const {isEditing, product}= this.props
    return (<div>
      {!isEditing ? 
      <div className="formBox">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VnVsmlBXhArKiHI9104yXZLF_Cu1mVQe3w&usqp=CAU"} alt=""/>
          <br/>
        <form>
          <input
          name="image"
          type="text"
          placeholder="image URL"
          value={this.state.image} 
          onChange={this.handleAllInputs}/>
          <br/>
          <input
          name="product_name"
          type="text"
          placeholder="Product Name"
          value={this.state.product_name} 
          onChange={this.handleAllInputs}/>
          <br/>
          <input
          name="price"
          type="text"
          placeholder="Price"
          value={this.state.price} 
          onChange={this.handleAllInputs}/>
          <br/>
        </form>
        <div className="formbtns">
        <button className="btn2"onClick={()=>this.cancelInput()}>Cancel</button>
        <br/>
        <button className="btn1" onClick={()=>this.addInventory()}>Add To Inventory</button>
        </div>
      </div>
    :       <div className="formBox">
    <img src={product.image} alt=""/>
    <br/>
  <form>
    <input
    name="image"
    type="text"
    placeholder="image URL"
    value={this.state.image} 
    onChange={this.handleAllInputs}/>
    <br/>
    <input
    name="product_name"
    type="text"
    placeholder="Product Name"
    value={this.state.product_name} 
    onChange={this.handleAllInputs}/>
    <br/>
    <input
    name="price"
    type="text"
    placeholder="Price"
    value={this.state.price} 
    onChange={this.handleAllInputs}/>
    <br/>
  </form>
  <div className="formbtns">
  <button className="btn2"onClick={()=>this.cancelEditInput()}>Cancel</button>
  <br/>
  <button className="btn1" onClick={()=>this.editInventory(product.id)}>Save Changes</button>
  </div>
</div>}</div>
    );
  }
}
export default withRouter(Form)

