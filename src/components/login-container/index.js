import React from "react";
import PropTypes from "prop-types";
import "./login.scss";
import Form from "~c/form";

LoginContainer.propTypes = {
  isMoodleFormOnFocus: PropTypes.bool.isRequired,
  isTrelloFormOnFocus: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

function LoginContainer({
  isMoodleFormOnFocus,
  isTrelloFormOnFocus,
  style,
  onInputFocus,
  onInputChange,
}) {
  return (
    <div
      className={"wrapper part "
        .concat(style === "moodle" ? "left-wrapper " : "right-wrapper ")
        .concat(
          style === "moodle"
            ? isMoodleFormOnFocus
              ? "onFocus"
              : isTrelloFormOnFocus
              ? "withoutFocus"
              : ""
            : isTrelloFormOnFocus
            ? "onFocus"
            : isMoodleFormOnFocus
            ? "withoutFocus"
            : ""
        )}
    >
      <Form
        style={style}
        onInputFocus={onInputFocus}
        onInputChange={onInputChange}
      />
    </div>
  );
}

export default LoginContainer;
