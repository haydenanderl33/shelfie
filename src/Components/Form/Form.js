import React, { Component } from 'react';


export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            imgUrl: "",
            productName:"",
            price: 0
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {imgUrl,productName,price} = this.state
        
        this.setState({
            imgUrl: "",
            productName:"",
            price: 0

        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <div>
                This is the Form
                <br/>
                <form >
                    Img URL: <input
                    name="imgUrl"
                    onChange={e =>this.handleChange(e)}/>
                    <br/>
                    Product Name:<input
                    name="productName"
                    onChange={e =>this.handleChange(e)}
                    />
                    <br/>
                    Price:<input
                    name="price"
                    placeholder="0"
                    onChange={e =>this.handleChange(e)}/>
                <button type="reset" onClick={(e) => this.handleSubmit}>Cancel</button>
                <button type='submit'>Add to Inventory</button>
                </form>
            </div>
        )
    }
}