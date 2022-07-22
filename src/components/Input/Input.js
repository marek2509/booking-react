import React, { useRef } from "react";
import PropTypes from "prop-types";

const InputText = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        className={`form-control ${
          props.error && props.showError ? "is-invalid" : ""
        }`}
      />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
};

const InputTextarea = (props) => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <textarea
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        className={`form-control ${
          props.error && props.showError ? "is-invalid" : ""
        }`}
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
        className={`form-control ${false ? "is-invalid" : ""}`}
      >
        {props.options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <div className="invalid-feedback">Błąd</div>
    </div>
  );
};

const InputFile = (props) => {
  const fileRef = useRef();

  const changeFileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.onChange(file);
    }
  };

  return (
    <div className="form-group">
      <input type={props.type} onChange={changeFileHandler} />
    </div>
  );
};

const InputRadio = (props) => {
  const changeHandler = (e) => {
    const status = e.target.value;
    props.onChange(status);
  };
  return (
    <div className="form-group">
      {props.options.map((option) => (
        <div
          className="custom-control custom-checkbox"
          key={`radio-${option.value}-${props.name}`}
        >
          <input
            className="custom-control-input"
            type={props.type}
            name={props.name}
            value={option.value}
            checked={option.value == props.value}
            id={`radio-${option.value}-${props.name}`}
            onChange={changeHandler}
          />
          <label
            className="custom-control-label"
            htmlFor={`radio-${option.value}-${props.name}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

const InputCheckbox = (props) => {
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

  return (
    <div className="form-group">
      {props.options.map((option) => (
        <div className="custom-control custom-checkbox" key={option.value}>
          <input
            className="custom-control-input"
            type="checkbox"
            id={option.value}
            value={option.value}
            checked={props.value.find((x) => x === option.value)}
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
    case "file":
      return <InputFile {...props} />;
    case "radio":
      return <InputRadio {...props} />;
    case "textarea":
      return <InputTextarea {...props} />;
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
