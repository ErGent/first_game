import React, { Component } from "react";
import * as constants from "./constants";

class Memorycard extends Component {
  render() {
    let imgName =
      constants.imgDir + this.props.name.toLowerCase() + constants.imgExt;
    //let imgName = `${constants.imgDir}${this.props.name.toLowerCase()}${
    //constants.imgExt
    //}`; THIS IS THE SAME THING
    return (
      <div className="Memorycard">
        <h1>{this.props.name}</h1>
        <img src={imgName} alt={this.props.alt} />
      </div>
    );
  }
}
export default Memorycard;
