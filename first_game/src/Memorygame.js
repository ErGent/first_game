import React, { Component } from "react";
import Memoryrandom from "./Memoryrandom";
import Memorycard from "./Memorycard";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
class Memorygame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      gameOver: false,
      cards: [
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

  cardOnClick = (id) => {
    let newSide = "back";
    if (this.state.cards[id]["side"] === "back") {
      newSide = "front";
    }

    let newAnimals = [...this.state.cards];
    let newAnimal = { ...newAnimals[id] };
    newAnimal.side = newSide;
    newAnimals[id] = newAnimal;
    this.setState({ cards: newAnimals });
    console.log("called flip card function for card ", id);
    console.log(this.state.cards[id]["side"], "OLD SIDE");
  };

  randomizeOnClick = () => {
    let cards = [...this.state.cards];

    let randomized = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randAnimals = cards.splice(randIdx, 1)[0];
      randomized.push(randAnimals);
    }
    this.setState({ cards: randomized });
  };

  render() {
    console.log(this.state.cards);
    return (
      <div className="Memorygame">
        <h1> Your Score Is: {this.state.score} </h1>
        <Memoryrandom
          cards={this.state.cards}
          cardOnClick={this.cardOnClick}
          randomizeOnClick={this.randomizeOnClick}
        />
      </div>
    );
  }
}

export default Memorygame;
