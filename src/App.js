import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        // {
        //   imgUrl: "imgURL",
        //   productName: "hats",
        //   price: 0,
        // },
        // {
        //   imgUrl: "imgURL",
        //   productName: "hats",
        //   price: 0,
        // }
      ]
    };
  }

  componentDidMount() {
    axios.get("/api/inventory")
    .then((res) => {
      this.setState({inventory: res.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }
  handleClick = (product_name,price, image) => {
    axios
    .post("/api/inventory", {product_name,price, image})
    .then((res) => {
      this.setState({ inventory: res.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form handleClick={this.handleClick} />
      </div>
    );
  }
}
