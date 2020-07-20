import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function Input({ type, placeholder }) {
  return (
    <div>
      <input
        type="text"
        className={type === "trello" ? "trello-input" : "moodle-input"}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
