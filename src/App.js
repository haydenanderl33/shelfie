import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        {
          imgUrl: "imgURL",
          productName: "hats",
          price: 0,
        },
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
      </div>
    );
  }
}
