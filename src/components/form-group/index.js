import React from "react";
import PropTypes from "prop-types";
import Label from "~c/label";
import Input from "~c/input";

FormGroup.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputStyle: PropTypes.string.isRequired,
  onInputFocus: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

function FormGroup({
  labelName,
  inputStyle,
  inputPlaceholder,
  inputName,
  onInputChange,
  onInputFocus,
}) {
  return (
    <div className="form-group">
      <Label name={labelName} />
      <Input
        style={inputStyle}
        placeholder={inputPlaceholder}
        name={inputName}
        onChange={onInputChange}
        onFocus={onInputFocus}
      />
    </div>
  );
}

export default FormGroup;
