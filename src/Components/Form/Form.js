import React, { Component } from 'react';


export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            image: "",
            product_name:"",
            price: 0
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {product_name,price, image} = this.state
        this.props.handleClick(product_name,price, image)
        this.setState({
            image: "",
            product_name:"",
            price: 0

        })
    }


    // handleCancel = () => {
    //     this.setState({
    //         image: "",
    //         product_name:"", 
    //         price: 0
    //     })
    // }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <div>
                <br/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Img URL: <input
                    name="image"
                    onChange={e =>this.handleChange(e)}/>
                    <br/>
                    Product Name:<input
                    name="product_name"
                    onChange={e =>this.handleChange(e)}
                    />
                    <br/>
                    Price$:<input
                    name="price"
                    placeholder="0"
                    onChange={e =>this.handleChange(e)}/>
                <button type='submit'>Add to Inventory</button>
                {/* <button onClick={() => this.handleCancel()} >Cancel</button> */}
                </form>
            </div>
        )
    }
}