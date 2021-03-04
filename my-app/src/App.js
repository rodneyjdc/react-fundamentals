import logo from './logo.svg';
import './App.css';
import React from "react";

const el = React.createElement;

class App extends React.Component {
  state = {
    total: 0,
    inputValue: 0 
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  resetForm = (event) => {
    this.setState({
      [event.target.value]: "",
      //[event.target.placeholder]: "",
      fullName: ""
    })
  }

  // submitForm = () => {
  //   if (this.state.firstName && this.state.lastName && this.state.username && this.state.password) {
  //     alert(`Welcome ${this.state.fullName}!`);
  //   } else {
  //     alert("Please enter the required fields")
  //   } 
  // }

  calculate = () => {

  }

  

  render() {
    return el("form", {id: "calcForm", onSubmit: this.calculate}, 
      el("p", {name: "result"}, this.state.total),
      el("input", {name: "input", placeholder: "input", onChange: this.handleInputChange}, null),
      el("div", null,
        el("button", {name: "resetForm", onClick: this.add}, "Add"),
        el("button", {name: "resetForm", onClick: this.subtract}, "Subtract"),
        el("button", {name: "resetForm", onClick: this.multiply}, "Multiply"),
        el("button", {name: "resetForm", onClick: this.divide}, "Divide"),
      ),
      el("button", {name: "submit", type: "submit"}, "Calculate")

    );
  }
}

export default App;
