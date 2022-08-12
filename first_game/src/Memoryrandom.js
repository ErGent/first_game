import React, { Component } from "react";
import Memorydeck from "./Memorydeck";

class Memoryrandom extends Component {
  constructor(props) {
    super(props);
    this.state = { animals: props.animals };
    this.randomize = this.randomize.bind(this);
  }

  randomize() {
    let cards = [...this.state.animals];
    let randomized = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randAnimals = cards.splice(randIdx, 1)[0];
      randomized.push(randAnimals);
    }
    this.setState({ animals: randomized });
  }

  render() {
    console.log("randomizer", this.state.animals);
    return (
      <div>
        <h1> MEMORY GAME!</h1>
        <button onClick={this.randomize}> New Game </button>
        <Memorydeck animals={this.state.animals} />
      </div>
    );
  }
}

export default Memoryrandom;
