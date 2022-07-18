import React from "react";
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
          <a href="#" className="btn btn-sm btn-dark">
            Tak
          </a>
          <button href="#" onClick={props.onRemove} className="btn btn-sm btn-dark">
            Nie
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastHotel;
