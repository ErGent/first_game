import React, { Component } from "react";
import Memorycard from "./Memorycard";

class Memorydeck extends Component {
  static defaultProps = {
    animals: [
      { name: "Elephant" },
      { name: "Bee" },
      { name: "Esme" },
      { name: "Octopus" },
    ],
  };
  render() {
    return (
      <>
        {this.props.animals.map((a) => (
          <Memorycard name={a.name} />
        ))}
      </>
    );
  }
}

export default Memorydeck;
