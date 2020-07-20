import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Button({ type, text }) {
  return (
    <div className="label-box">
      <button
        className={type === "trello" ? "btn btn-trello" : "btn btn-moodle"}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
