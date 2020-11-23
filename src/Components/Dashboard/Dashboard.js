import axios from "axios";
import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    };
  }

  componentDidMount(){
    this.getInventory()

  }

  getInventory = () => {
    axios.get('/api/inventory')
  .then(res => {
    this.setState({inventory: res.data})
  })
  .catch(err => {
    console.log("It not working right") 
  })}

  deleteInventory = (id) =>{
    axios.delete(`/api/inventory/${id}`)
    .then(this.getInventory())
    .catch(err =>{
      console.log(err)
    })} 
   
  toEditInventory = (id) => {
    axios.get(`/api/inventory/${id}`)
    .then(this.props.history.push(`/edit/${id}`))
    .catch(err =>{
      console.log(err)
    })}
  


  // this.props.history.push('/edit/id')

  render() {
    const {inventory} = this.state
    const mappedProducts = inventory.map(product => {
      return <Product key={product.id} product={product} 
      deleteInventory={this.deleteInventory}toEditInventory={this.toEditInventory} /> 
    })
    return (
      <div className="Dashboardbox">
        <div>{mappedProducts}</div>
      </div>
    );
  }
}
