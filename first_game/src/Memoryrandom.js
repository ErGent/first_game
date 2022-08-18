import React, { Component } from "react";
import Memorydeck from "./Memorydeck";

class Memoryrandom extends Component {
  onClick = () => {
    this.props.randomizeOnClick(this.props.animals);
  };

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
