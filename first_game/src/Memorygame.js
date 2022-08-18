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

  cardOnClick = (id) => {
    let newSide = "back";
    if (this.state.animals[id]["side"] === "back") {
      newSide = "front";
    }

    let newAnimals = [...this.state.animals];
    let newAnimal = { ...newAnimals[id] };
    newAnimal.side = newSide;
    newAnimals[id] = newAnimal;
    this.setState({ animals: newAnimals });
    console.log("called flip card function for card ", id);
    console.log(this.state.animals[id]["side"], "OLD SIDE");
  };

  randomizeOnClick = () => {
    let cards = [...this.state.animals];

    let randomized = [];
    while (cards.length > 0) {
      let randIdx = Math.floor(Math.random() * cards.length);
      let randAnimals = cards.splice(randIdx, 1)[0];
      randomized.push(randAnimals);
    }
    this.setState({ animals: randomized });
  };

  render() {
    console.log(this.state.animals);
    return (
      <div className="Memorygame">
        <h1> Your Score Is: {this.state.score} </h1>
        <Memoryrandom
          animals={this.state.animals}
          cardOnClick={this.cardOnClick}
          randomizeOnClick={this.randomizeOnClick}
        />
      </div>
    );
  }
}

export default Memorygame;
