import React, { Component } from "react";
import Memorycard from "./Memorycard";
import "./Memorydeck.css";

class Memorydeck extends Component {
  render() {
    console.log("deck", this.props.animals);
    let id = 0;
    return (
      <div className="Memorydeck">
        <div className="Memorydeck-cards">
          {this.props.animals.map((a) => (
            <Memorycard
              id={id++}
              name={a.name}
              cardOnClick={this.props.cardOnClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Memorydeck;
