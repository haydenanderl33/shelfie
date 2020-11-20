import axios from "axios";
import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      image: "",
      product_name: "",
      price: 0
    };
  }

  addInventory = () => {
      const {image,product_name,price} = this.state;
      axios.post("/api/inventory", {product_name, image, price})
      .then()
      .catch(err => console.log(err))
      // {this.props.history.push('/')}
      console.log(this.state)
  }



handleAllInputs = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  }) 
  // console.log([event.target.name])
}

  render() {
    return (
      <div className="formBox">
          <img alt=""/>
        <form>
          <input
          name="image"
          type="text"
          value={this.state.image} 
          onChange={this.handleAllInputs}/>
          <br/>
          <input
          name="product_name"
          type="text"
          value={this.state.product_name} 
          onChange={this.handleAllInputs}/>
          <br/>
          <input
          name="price"
          type="text"
          value={this.state.price} 
          onChange={this.handleAllInputs}/>
          <br/>
          <button onClick={()=>this.addInventory()}>Add</button>
        </form>
      </div>
    );
  }
}

//     render(){
//         return(
//             <div>
//                 <br/>
//                 <form onSubmit={(e) => this.handleSubmit(e)}>
//                     Img URL: <input
//                     name="image"
//                     onChange={(e) => this.handleChange(e)}/>
//                     <br/>
//                     Product Name:<input
//                     name="product_name"
//                     onChange ={(e) => this.handleChange(e)}
//                     />
//                     <br/>
//                     Price$:<input
//                     name="price"
//                     placeholder="0"
//                     onChange ={(e) => this.handleChange(e)}
//                     />
//                 <button>Add to Inventory</button>
//                 <button onClick={this.handleCancel} >Cancel</button>
//                 </form>
//             </div>
//         )
//     }
// }
