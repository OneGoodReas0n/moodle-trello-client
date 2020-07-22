import React from "react";
import PropTypes from "prop-types";
import "./form.scss";
import FormGroup from "~c/form-group";
import Button from "~c/button";
import Input from "~c/input";
import TrelloLogo from "~a/images/trello_logo.svg";
import TUIlmLogo from "~a/images/tu-ilmenau_logo.svg";

Form.propTypes = {
  style: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

function Form({ style, onInputFocus, onInputChange, onFormSubmit }) {
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
      <Button type="moodle" text="Enter" onClick={onFormSubmit} />
    </form>
  ) : (
    <form className="form">
      <img src={TrelloLogo} />
      <Input
        style="trello"
        placeholder="Enter email"
        name="trello-login"
        onChange={onInputChange}
        onFocus={onInputFocus}
      />
      <Input
        style="trello"
        placeholder="Enter password"
        type="password"
        name="trello-password"
        onChange={onInputChange}
        onFocus={onInputFocus}
      />
      <Button type="trello" text="Log in" onClick={onFormSubmit} />
    </form>
  );
}

export default Form;
