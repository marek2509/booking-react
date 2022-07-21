import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddHotel from "./AddHotel/AddHotel";

const MyHotels = () => (
  <div>
    <p>Nie masz jeszcze żadnego hotelu</p>
    <Link to="dodaj" className="btn btn-primary">
      Dodaj hotel
    </Link>
  </div>
);

export default MyHotels;
