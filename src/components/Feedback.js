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
  upgradeValueGood() {
    this.setState((prevState) => {
      return {
        good: this.state.good + 1,
      };
    });
  }
  upgradeValueNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: this.state.neutral + 1,
      };
    });
  };
  upgradeValueBad = () => {
    this.setState((prevState) => {
      return {
        bad: this.state.bad + 1,
      };
    });
  };
  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <div>
        <h1>Please leave Feedback</h1>

        <button data="good" onClick={this.upgradeValueGood}>
          {this.state.good}
        </button>
        <button data="neutral" onClick={this.upgradeValueNeutral}>
          {this.state.neutral}
        </button>
        <button data="bad" onClick={this.upgradeValueBad}>
          {this.state.bad}
        </button>
        <h1>Statistics</h1>
        <ul>
          <li>{this.state.good}</li>
          <li>{this.state.neutral}</li>
          <li>{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
