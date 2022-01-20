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
    console.log(event.target);
    const target = event.target;
    this.setState((prevState) => {
      console.log(target);

      return {
        good: this.state.good + 1,
        neutral: this.state.neutral + 1,
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

        <button data="good" onClick={this.upgradeValue}>
          {this.state.good}
        </button>
        <button data="neutral" onClick={this.upgradeValue}>
          {this.state.neutral}
        </button>
        <button data="bad" onClick={this.upgradeValue}>
          {this.state.bad}
        </button>
      </div>
    );
  }
}
export default Feedback;
