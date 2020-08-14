import React from "react";
import PropTypes from "prop-types";
import Label from "~c/parts/label";
import Input from "~c/parts/input";

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
        type={String(labelName).toLowerCase()}
      />
    </div>
  );
}

export default FormGroup;
