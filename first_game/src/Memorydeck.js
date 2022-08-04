import React, { Component } from "react";
import Memorycard from "./Memorycard";
import "./Memorydeck.css";

class Memorydeck extends Component {
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
    return (
      <div className="Memorydeck">
        <div className="Memorydeck-cards">
          {this.props.animals.map((a) => (
            <Memorycard name={a.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Memorydeck;
