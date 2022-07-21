import React from "react";
import PropTypes from "prop-types";
import { props } from "bluebird";
import { option } from "yargs";

const changeFeatureHandler = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  if (isChecked) {
    const newValue = [...props.value, value];
    props.onChange(newValue);
  } else {
    const newValue = props.value.filter((x) => x !== value);
    props.onChange(newValue);
  }
};

const InputText = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        className={`form-control ${
          !props.error && props.showError ? "is-invalid" : ""
        } }`}
      />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
};

const InputSelect = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={`form-control ${false ? "is-invalid" : ""} }`}
      >
        {props.options.map((option) => {
          return <option value={option.valie}>{option.label}</option>;
        })}
      </select>
      <div className="invalid-feedback">Błąd</div>
    </div>
  );
};

const InputCheckbox = (props) => {
  return (
    <div className="form-group">
      {props.options.map((option) => (
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id={option.value}
            value={option.value}
            checked={props.value.find((x) => x === option.valie)}
            onChange={changeFeatureHandler}
          />
          <label className="custom-control-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

function Input(props) {
  switch (props.type) {
    case "select":
      return <InputSelect {...props} />;
    case "checkbox":
      return <InputCheckbox {...props} />;
    default:
      return <InputText {...props} />;
  }
}

Input.defaultProps = {
  type: "text",
  isValid: false,
  showError: false,
};

export default Input;
