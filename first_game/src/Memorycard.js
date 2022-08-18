import React, { Component } from "react";
import * as constants from "./constants";
import "./Memorycard.css";

class Memorycard extends Component {
  onClick = () => {
    this.props.cardOnClick(this.props.id);
  };

  render() {
    let imgName =
      constants.imgDir + this.props.name.toLowerCase() + constants.imgExt;
    let flipped = this.props["side"] === "front" ? "" : "flipped";
    console.log(this.props);
    return (
      <div className={"Memorycard " + flipped} onClick={this.onClick}>
        <div className={"front"}>
          <h1 className="Memorycard-title">{this.props.name}</h1>
          <img src={imgName} alt={this.props.alt} />
        </div>
        <div className={"back"}>
          <h1 className="Memorycard-title"> CLICK A CARD!</h1>
        </div>
      </div>
    );
  }
}
export default Memorycard;
