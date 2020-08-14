import React from "react";
import PropTypes from "prop-types";
import "./text.scss";

Text.propTypes = {
  content: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

function Text({ content, hide }) {
  return (
    <div>
      <p className="text text-danger" hidden={hide}>
        {content}
      </p>
    </div>
  );
}

export default Text;
