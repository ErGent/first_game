import React, { Component } from "react";
import * as constants from "./constants";
import "./Memorycard.css";

class Memorycard extends Component {
  render() {
    let imgName =
      constants.imgDir + this.props.name.toLowerCase() + constants.imgExt;
    //let imgName = `${constants.imgDir}${this.props.name.toLowerCase()}${
    //constants.imgExt
    //}`; THIS IS THE SAME THING
    return (
      <div className="Memorycard">
        <div className="front">
          <h1 className="Memorycard-title">{this.props.name}</h1>
          <div className="Memorycard-image">
            <img src={imgName} alt={this.props.alt} />
          </div>
        </div>
        <div className="back">
          <h1 className="Memorycard-title"> CLICK A CARD!</h1>
        </div>
      </div>
    );
  }
}
export default Memorycard;
