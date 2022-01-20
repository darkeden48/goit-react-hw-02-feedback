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
  upgradeValueGood = () => {
    this.setState((prevState) => {
      return {
        good: this.state.good + 1,
      };
    });
  };
  upgradeValueNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: this.state.neutral + 1,
      };
    });
  };
  upgradeValueBad = () => {
    console.log();
    this.setState((prevState) => {
      return {
        bad: this.state.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage() {}
  render() {
    const total = this.state.neutral + this.state.good + this.state.bad;
    return (
      <div>
        <h1>Please leave Feedback</h1>

        <button data="good" onClick={this.upgradeValueGood}>
          good
        </button>
        <button data="neutral" onClick={this.upgradeValueNeutral}>
          neutral
        </button>
        <button data="bad" onClick={this.upgradeValueBad}>
          bad
        </button>
        <h1>Statistics</h1>
        <ul>
          <li>{this.state.good}</li>
          <li>{this.state.neutral}</li>
          <li>{this.state.bad}</li>
          <li>{total}</li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
