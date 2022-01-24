import React from "react";
import "./index.css";
import Feedback from "./components/Feedback/Feedback";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = (total) => {
    const { good, neutral, bad } = this.state;
    total = neutral + good + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveTotal = (good / (neutral + good + bad)) * 100;
    return Math.trunc(positiveTotal);
  };
  addVote = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const buttonTitles = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave Feedback">
          <Feedback options={buttonTitles} onLeaveFeedback={this.addVote} />
        </Section>
        {total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
export default App;
