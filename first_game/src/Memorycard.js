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
    let showFront = this.state["side"] === "front" ? "" : "hidden";
    let showBack = this.state["side"] === "back" ? "" : "hidden";
    return (
      <div className="Memorycard" onClick={this.changeSide}>
        <div className={"front " + showFront}>
          <h1 className="Memorycard-title">{this.props.name}</h1>
          <div className="Memorycard-image">
            <img src={imgName} alt={this.props.alt} />
          </div>
        </div>
        <div className={"back " + showBack}>
          <h1 className="Memorycard-title"> CLICK A CARD!</h1>
        </div>
      </div>
    );
  }
}
export default Memorycard;
