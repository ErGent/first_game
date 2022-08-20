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
      cardClicked: false,
      cardOne: null,
      cardTwo: null,
      cards: [
        { id: 0, name: "Elephant", side: "back" },
        { id: 1, name: "Elephant", side: "back" },
        { id: 2, name: "Bee", side: "back" },
        { id: 3, name: "Bee", side: "back" },
        { id: 4, name: "Esme", side: "back" },
        { id: 5, name: "Esme", side: "back" },
        { id: 6, name: "Octopus", side: "back" },
        { id: 7, name: "Octopus", side: "back" },
        { id: 8, name: "Sea Lion", side: "back" },
        { id: 9, name: "Sea Lion", side: "back" },
        { id: 10, name: "Wasp", side: "back" },
        { id: 11, name: "Wasp", side: "back" },
      ],
    };
  }

  //need to change this to take in an array of cards and flip them all at once.
  // maybe rename flipCards
  flipCards = (ids) => {
    console.log(ids, "printing cards");
    let newCards = [...this.state.cards];
    for (let i = 0; i < ids.length; i++) {
      let id = ids[i];
      let newSide = "back";
      if (this.state.cards[id]["side"] === "back") {
        newSide = "front";
      }
      let newCard = { ...newCards[id] };
      newCard.side = newSide;
      newCards[id] = newCard;
      console.log("flipping card ", id);
    }

    this.setState({ cards: newCards });
  };

  cardOnClick = (id) => {
    console.log(this.state);
    if (this.state.cardClicked === true) {
      if (this.state.cardOne.name === this.state.cards[id].name) {
        // TODO set score
        this.setState({ cardOne: null, cardTwo: null, cardClicked: false });
      } else {
        this.setState({ cardTwo: this.state.cards[id] });
        setTimeout(this.resetCardsOnMismatch, 1000);
      }
    } else {
      this.setState({ cardOne: this.state.cards[id], cardClicked: true });
    }

    this.flipCards([id]);
  };

  resetCardsOnMismatch = () => {
    console.log(this.state);
    this.flipCards([this.state.cardOne.id, this.state.cardTwo.id]);
    this.setState({ cardOne: null, cardTwo: null, cardClicked: false });
  };

  randomizeOnClick = () => {
    let cards = [...this.state.cards];

    let randomized = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randCard = cards.splice(randIdx, 1)[0];
      randCard.side = "back";
      randCard.id = randomized.length;
      randomized.push(randCard);
    }
    this.setState({
      cards: randomized,
      cardOne: null,
      cardTwo: null,
      cardClicked: false,
    });
  };

  render() {
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
