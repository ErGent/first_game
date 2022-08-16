import React, { Component } from "react";
import * as constants from "./constants";
import "./Memorycard.css";

class Memorycard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "back",
    };
    this.changeSide = this.changeSide.bind(this);
  }

  changeSide() {
    let newSide = "back";
    if (this.state["side"] === "back") {
      newSide = "front";
    }
    this.setState({ side: newSide });
  }

  render() {
    let imgName =
      constants.imgDir + this.props.name.toLowerCase() + constants.imgExt;
    let flipped = this.state["side"] === "front" ? "" : "flipped";
    return (
      <div className={"Memorycard " + flipped} onClick={this.changeSide}>
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
