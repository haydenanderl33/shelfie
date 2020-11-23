import React, {Component} from 'react'
import Form from './Form'

export default class AddProduct extends Component {
    render() {
        return (
            <Form isEditing={false} history={this.props.history}/>
        )
    }
}