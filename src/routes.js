import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import AddProduct from './Components/Form/AddProduct';
import EditProduct from './Components/Form/EditProduct'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/add' component={AddProduct}/>
        <Route path='/edit/:id' component={EditProduct}/>
    </Switch>
)