// import { render } from "@testing-library/react";
import React from "react";

class Feedback extends React.Component {
  // constructor(){
  //     super();
  //     this.state={
  //         good: 0,
  //         neutral: 0,
  //         bad: 0
  //     }
  // }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  upgradeValue = (event) => {
    this.setState((prevState) => {
      return { good: this.state.good + 1 };
    });
  };

  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <div>
        <h1>Please leave Feedback</h1>

        <button onClick={this.upgradeValue}>{this.state.good}</button>
        <button onClick={() => console.log("neutral")}>
          {this.state.neutral}
        </button>
        <button onClick={() => console.log("bad")}>{this.state.bad}</button>
      </div>
    );
  }
}
export default Feedback;
