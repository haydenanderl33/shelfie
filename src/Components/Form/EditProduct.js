import Form from './Form'
import axios from 'axios'
import { Component } from 'react'

class EditProduct extends Component {
    
    constructor() {
        super()
    
        this.state = {
          product: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/api/inventory/${this.props.match.params.id}`)
        .then(res => this.setState({product: res.data}))
        .catch(err => console.log(err))
        console.log('banana')
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <Form isEditing={true} product={this.state.product}/>
        )
    }
}

export default EditProduct