import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Header extends Component {
    constructor(){
        super();

    }
    render(){
        return(
            <header>
               <div className="headerdiv">SHELFIE</div>
               <div><Link to ='/'><button className="headerbtn1">Dashboard</button></Link></div>
               <div><Link to='/edit/id'><button className="headerbtn2">Add Inventory</button></Link></div>
            </header>
        )
    }

}