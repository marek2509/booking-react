import React from "react";
import { Link } from "react-router-dom";
function LastHotel(props) {
  return (
    <div className="card mb-2 bg-light">
      <h6 className="card-header">
        Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
      </h6>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.name}</h5>
          <p className="badge badge-light">{props.city}</p>
        </div>
        <div
          style={{ width: "100px", marginLeft: "auto" }}
          className="d-flex justify-content-between"
        >
          <Link to={`hotele/${props.id}`} className="btn btn-sm btn-dark">
            Tak
          </Link>
          <button
            href="#"
            onClick={props.onRemove}
            className="btn btn-sm btn-dark"
          >
            Nie
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastHotel;
