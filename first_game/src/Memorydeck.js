import React, { Component } from "react";
import Memorycard from "./Memorycard";
import "./Memorydeck.css";

class Memorydeck extends Component {
  render() {
    console.log("deck", this.props.animals);
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
