import React from "react";
import { Link } from "react-router-dom";

const MyHotels = () => (
  <div>
    <p>Nie masz jeszcze żadnego hotelu</p>
    <Link to="dodaj" className="btn btn-primary">
      Dodaj hotel
    </Link>
  </div>
);

export default MyHotels;
