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
  render() {
    let randomize = [];
    let cards = [...this.props.animals];

    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randAnimals = cards.splice(randIdx, 1)[0];
      randomize.push(randAnimals);
    }
    return (
      <div>
        <h1> MEMORY GAME!</h1>
        <Memorydeck animals={randomize} />
      </div>
    );
  }
}

export default Memoryrandom;
