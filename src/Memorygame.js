import React, { Component } from "react";
import Memoryrandom from "./Memoryrandom";
import "./Memorygame.css";
import Memorycard from "./Memorycard";

class Memorygame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardsDisabled: false,
      cardBack: "Click a Card!",
      tries: 0,
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
    if (this.state.cardsDisabled) {
      return;
    }

    if (this.state.cardClicked === true) {
      if (this.state.cardOne.name === this.state.cards[id].name) {
        if (this.state.cardOne.id === this.state.cards[id].id) {
          return;
        }

        this.setState({
          cardOne: null,
          cardTwo: null,
          cardClicked: false,
          score: this.state.score + 1,
          tries: this.state.tries + 1,
        });
      } else {
        this.setState({
          cardsDisabled: true,
          cardTwo: this.state.cards[id],
          tries: this.state.tries + 1,
          cardBack: "Comparing...",
        });
        setTimeout(this.resetCardsOnMismatch, 1500);
      }
    } else {
      this.setState({
        cardOne: this.state.cards[id],
        cardClicked: true,
      });
    }

    this.flipCards([id]);
  };

  resetCardsOnMismatch = () => {
    console.log(this.state);
    this.flipCards([this.state.cardOne.id, this.state.cardTwo.id]);
    this.setState({
      cardOne: null,
      cardTwo: null,
      cardClicked: false,
      cardsDisabled: false,
      cardBack: "Click a Card!",
    });
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
      tries: 0,
      score: 0,
    });
  };

  render() {
    return (
      <div className="Memorygame">
        <h1> Your Score Is: {this.state.score} </h1>
        <h2>Number of Tries: {this.state.tries}</h2>
        <Memoryrandom
          cardBack={this.state.cardBack}
          cards={this.state.cards}
          cardOnClick={this.cardOnClick}
          randomizeOnClick={this.randomizeOnClick}
        />
      </div>
    );
  }
}

export default Memorygame;
