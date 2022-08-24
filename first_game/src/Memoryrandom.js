import React, { Component } from "react";
import Memorydeck from "./Memorydeck";

class Memoryrandom extends Component {
  onClick = () => {
    this.props.randomizeOnClick(this.props.cards);
  };

  render() {
    return (
      <div className="Memoryrandom">
        <button onClick={this.onClick}> New Game </button>
        <Memorydeck
          cards={this.props.cards}
          cardOnClick={this.props.cardOnClick}
          cardBack={this.props.cardBack}
        />
      </div>
    );
  }
}

export default Memoryrandom;
