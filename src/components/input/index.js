import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

Input.propTypes = {
  style: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

function Input({ style, type, placeholder, name, onChange, onFocus }) {
  return (
    <div>
      <input
        type={type === "password" ? "password" : "text"}
        className={style === "trello" ? "trello-input" : "moodle-input"}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onFocus}
      />
    </div>
  );
}

export default Input;
