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

    let newCards = [...this.state.cards];
    let newCard = { ...newCards[id] };
    newCard.side = newSide;
    newCards[id] = newCard;
    this.setState({ cards: newCards });
  };

  //compare = () => {
  // let compareCards = [];
  //let cardOne = (first clicked card)
  //let cardTwo = (second clicked card)
  //if cardOne !== cardTwo
  //this will hold compare logic if card 1 === card 2, stay up, if not, disable, set timer, reset
  //}

  randomizeOnClick = () => {
    let cards = [...this.state.cards];

    let randomized = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randCards = cards.splice(randIdx, 1)[0];
      randomized.push(randCards);
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
