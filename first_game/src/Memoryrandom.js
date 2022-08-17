import React, { Component } from "react";
import Memorydeck from "./Memorydeck";

class Memoryrandom extends Component {
  constructor(props) {
    super(props);
    // this.state = { animals: props.animals };
    this.onClick = this.onClick.bind(this);
  }

  // randomize() {
  //   let cards = [...this.state.animals];
  //   let randomized = [];
  //   while (cards.length > 0) {
  //     let randIdx = Math.floor(Math.random() * cards.length);
  //     let randAnimals = cards.splice(randIdx, 1)[0];
  //     randomized.push(randAnimals);
  //   }
  //   this.setState({ animals: randomized });
  // }

  onClick() {
    this.props.randomizeOnClick(this.props.animals);
  }

  render() {
    return (
      <div className="Memoryrandom">
        <button onClick={this.onClick}> New Game </button>
        <Memorydeck
          animals={this.props.animals}
          cardOnClick={this.props.cardOnClick}
        />
      </div>
    );
  }
}

export default Memoryrandom;
