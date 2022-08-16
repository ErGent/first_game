import React, { Component } from "react";
import Memoryrandom from "./Memoryrandom";
class Memorygame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
      animals: [
        { name: "Elephant" },
        { name: "Elephant" },
        { name: "Bee" },
        { name: "Bee" },
        { name: "Esme" },
        { name: "Esme" },
        { name: "Octopus" },
        { name: "Octopus" },
        { name: "Sea Lion" },
        { name: "Sea Lion" },
        { name: "Wasp" },
        { name: "Wasp" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <h1> Your Score Is: {this.state.score} </h1>
        <Memoryrandom animals={this.state.animals} />
      </div>
    );
  }
}

export default Memorygame;
