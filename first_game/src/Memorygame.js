import React, { Component } from "react";
import Memoryrandom from "./Memoryrandom";
class Memorygame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
      animals: [
        { name: "Elephant", side: "back" },
        { name: "Elephant", side: "back" },
        { name: "Bee", side: "back" },
        { name: "Bee", side: "back" },
        { name: "Esme", side: "back" },
        { name: "Esme", side: "back" },
        { name: "Octopus", side: "back" },
        { name: "Octopus", side: "back" },
        { name: "Sea Lion", side: "back" },
        { name: "Sea Lion", side: "back" },
        { name: "Wasp", side: "back" },
        { name: "Wasp", side: "back" },
      ],
    };
  }

  cardOnClick() {
    console.log("called flip card function");
  }

  render() {
    return (
      <div className="App">
        <h1> Your Score Is: {this.state.score} </h1>
        <Memoryrandom
          animals={this.state.animals}
          cardOnClick={this.cardOnClick}
        />
      </div>
    );
  }
}

export default Memorygame;
