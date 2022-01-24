// import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import f from "./Feedback.module.css";
const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option) => (
        <li className={f.element} key={option}>
          <button className={f.button} name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default Feedback;
