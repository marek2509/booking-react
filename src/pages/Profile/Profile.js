import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotels from "./MyHotels/MyHotels";
import AddHotel from "./MyHotels/AddHotel/AddHotel";

function Profile(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Mój profil</h2>
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" end to="">
              Profil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="hotele">
              Hotele
            </NavLink>
          </li>
        </ul>
        <div className="mt-4">
          <Routes>
            <Route path="" element={<ProfileDetails />} />
            <Route path="hotele/*" element={<MyHotels />} />
            <Route path="hotele/dodaj" element={<AddHotel />} />
          </Routes>
        </div>
        <p>...</p>
      </div>
    </div>
  );
}

export default Profile;
