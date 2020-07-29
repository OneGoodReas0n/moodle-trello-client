import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import FormGroup from "~c/section/form-group";
import Button from "~c/parts/button";
import Text from "~c/parts/text";
import TrelloLogo from "~a/images/trello_logo.svg";
import TUIlmLogo from "~a/images/tu-ilmenau_logo.svg";

Form.propTypes = {
  style: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  onFormSubmit: PropTypes.func.isRequired,
  onAuthSuccess: PropTypes.bool.isRequired,
};

function Form({
  style,
  onInputFocus,
  onInputChange,
  onFormSubmit,
  onAuthSuccess,
}) {
  return style === "moodle" ? (
    <form className="form">
      <img src={TUIlmLogo} />
      <FormGroup
        labelName="Login"
        inputName="moodle-login"
        inputStyle="moodle-input"
        inputPlaceholder="Your login"
        onInputChange={onInputChange}
        onInputFocus={onInputFocus}
      />
      <FormGroup
        labelName="Password"
        inputName="moodle-password"
        inputStyle="moodle-input"
        inputPlaceholder="Your password"
        onInputChange={onInputChange}
        onInputFocus={onInputFocus}
      />
      <Text content="Wrong login or password" hide={onAuthSuccess} />
      <Button type="moodle" text="Enter" onClick={onFormSubmit} />
    </form>
  ) : (
    <form className="form">
      <img src={TrelloLogo} />
      <Text content="An error has occurred" hide={onAuthSuccess} />
      <Button type="trello" text="Authorize" onClick={onFormSubmit} />
    </form>
  );
}

export default Form;
