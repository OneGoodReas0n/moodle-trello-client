import React from "react";
import PropTypes from "prop-types";
import "./label.scss";

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

function Label({ name }) {
  return (
    <div className="label-box">
      <label className="label">{name}</label>
    </div>
  );
}

export default Label;
