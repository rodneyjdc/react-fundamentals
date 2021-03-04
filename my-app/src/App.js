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
      inputValue: event.target.value
    })
  }

  calculate = () => {

  }
 
  add = () => {
    let result = Number(this.state.total) + Number(this.state.inputValue);

    console.log("Total: ", result);
    console.log("Val: ", result);
    this.setState({
      total: [result]
    }); 
  }

  subtract = () => {
    let result = Number(this.state.total) - Number(this.state.inputValue);

    console.log("Total: ", result);
    console.log("Val: ", result);
    this.setState({
      total: [result]
    }); 
  }

  divide = () => {
    let result = Number(this.state.total) / Number(this.state.inputValue);

    console.log("Total: ", result);
    console.log("Val: ", result);
    this.setState({
      total: [result]
    }); 
  }

  multiply = () => {
    let result = Number(this.state.total) * Number(this.state.inputValue);

    console.log("Total: ", result);
    console.log("Val: ", result);
    this.setState({
      total: [result]
    }); 
  }


  render() {
    return el("form", {id: "calcForm"}, 
      el("p", {name: "result"}, this.state.total),
      el("input", {name: "inputValue", placeholder: "input", onChange: this.handleInputChange}, null),
      el("div", null,
        el("button", {name: "add", type:"button", onClick: this.add}, "Add"),
        el("button", {name: "subtract", type:"button", onClick: this.subtract}, "Subtract"),
        el("button", {name: "multiply", type:"button", onClick: this.multiply}, "Multiply"),
        el("button", {name: "divide", type:"button", onClick: this.divide}, "Divide"),
      )
    );
  }
}

export default App;
