import React, { Component } from "react";
import Memorydeck from "./Memorydeck";

class Memoryrandom extends Component {
  static defaultProps = {
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

  randomize() {
    let cards = [...this.props.animals];
    let randomize = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randAnimals = cards.splice(randIdx, 1)[0];
      randomize.push(randAnimals);
    }
    return randomize;
  }

  render() {
    return (
      <div>
        <h1> MEMORY GAME!</h1>
        <button onClick={() => this.randomize()}> New Game </button>
        <Memorydeck animals={this.randomize()} />
      </div>
    );
  }
}

export default Memoryrandom;
