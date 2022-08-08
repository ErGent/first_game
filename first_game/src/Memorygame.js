import React, { Component } from "react";

class Memorygame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  render() {
    return (
      <div>
        <h1> Your Score Is: {this.state.score} </h1>
      </div>
    );
  }
}

export default Memorygame;
