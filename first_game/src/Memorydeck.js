import React, { Component } from "react";
import Memorycard from "./Memorycard";
import "./Memorydeck.css";

class Memorydeck extends Component {
  render() {
    let id = 0;

    return (
      <div className="Memorydeck">
        <div className="Memorydeck-cards">
          {this.props.animals.map((a) => (
            <Memorycard
              id={id++}
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
