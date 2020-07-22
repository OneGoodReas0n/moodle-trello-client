import React from "react";
import PropTypes from "prop-types";
import "./login.scss";
import Form from "~c/form";
import Complete from "~c/complete";

LoginContainer.propTypes = {
  isMoodleFormOnFocus: PropTypes.bool.isRequired,
  isTrelloFormOnFocus: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isMoodleFormComplete: PropTypes.bool.isRequired,
  isTrelloFormComplete: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

function LoginContainer({
  isMoodleFormOnFocus,
  isTrelloFormOnFocus,
  style,
  onInputFocus,
  onInputChange,
  isMoodleFormComplete,
  isTrelloFormComplete,
  onFormSubmit,
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
        onFormSubmit={onFormSubmit}
      />
      <Complete
        style={style}
        isTrelloFormComplete={isTrelloFormComplete}
        isMoodleFormComplete={isMoodleFormComplete}
      />
    </div>
  );
}

export default LoginContainer;
