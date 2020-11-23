import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render(){
        return(
            <header>
               <div className="headerdiv">SHELFIE</div>
               <div><Link to ='/'><button className="headerbtn1">Dashboard</button></Link></div>
               <div><Link to='/add'><button className="headerbtn2">Add Inventory</button></Link></div>
            </header>
        )
    }

}