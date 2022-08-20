import React, { Component } from "react";
import Memorycard from "./Memorycard";
import "./Memorydeck.css";

class Memorydeck extends Component {
  render() {
    return (
      <div className="Memorydeck">
        <div className="Memorydeck-cards">
          {this.props.cards.map((a) => (
            <Memorycard
              id={a.id}
              name={a.name}
              cardOnClick={this.props.cardOnClick}
              side={a.side}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Memorydeck;
