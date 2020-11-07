import React, { Component } from 'react'


export default class Product extends Component {
    constructor(){
        super();

    }

    render(){
        const {products} = this.props
        return(
            <div>
                {products}
            </div>
        )
    }
}