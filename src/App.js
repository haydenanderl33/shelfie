import "./App.css";
import Header from "./Components/Header/Header";
import { Component } from "react";
import routes from './routes'


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };


  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
        {routes}
        </main>
      </div> 
    );
  }
}
