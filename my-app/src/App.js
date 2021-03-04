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
      inputValue: event.target.value,
    })
  }

  resetHandler = () => {
    this.setState({
      total: 0,
      inputValue: 0
    })
  }

  calculate = (incomingEvent) => {
    let result;
    switch (incomingEvent.target.name) 
    {
      case "add":
        result = Number(this.state.total) + Number(this.state.inputValue);
        break;
      case "subtract":
        result = Number(this.state.total) - Number(this.state.inputValue);
        break;
      case "divide":
        result = Number(this.state.total) / Number(this.state.inputValue);
        break;
      case "multiply":
        result = Number(this.state.total) * Number(this.state.inputValue);
        break;
    }
    this.setState({
      total: [result]
    }); 
  }

  render() {
    return el("form", {id: "calcForm", onReset: this.resetHandler}, 
      el("p", {name: "result"}, `Total: ${this.state.total}`),
      el("input", {name: "inputValue", placeholder: "Input", onChange: this.handleInputChange}, null),
      el("button", {name: "reset", type:"reset"}, "Reset"),
      el("div", { id: "buttonContainer"},
        el("button", {class: "opButton", name: "add", type:"button", onClick: this.calculate}, "Add"),
        el("button", {class: "opButton", name: "subtract", type:"button", onClick: this.calculate}, "Subtract"),
        el("button", {class: "opButton", name: "multiply", type:"button", onClick: this.calculate}, "Multiply"),
        el("button", {class: "opButton", name: "divide", type:"button", onClick: this.calculate}, "Divide")
      )
    );
  }
}

export default App;
