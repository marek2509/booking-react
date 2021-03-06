import React from "react";

export default function LoadingButton(props) {
  const className = props.className == null ? "btn-primary" : props.className;
  const buttonProps = {...props}
  delete buttonProps.loading;

  return props.loading ? (
    <button className={`btn ${className} mt-2`} type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="sr-only">Ładowanie...</span>
    </button>
  ) : (
    <button {...buttonProps} className={`btn ${className} mt-2`}>
      {props.children}
    </button>
  );
}
