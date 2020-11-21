import axios from "axios";
import React, { Component } from "react";

export default class Form extends Component {
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
      // {this.props.history.push('/')}
      
  }

  cancelInput = () => {
    this.setState({
      image: "",
      product_name: "",
      price: ""
    })
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
