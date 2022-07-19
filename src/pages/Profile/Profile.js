import React, { useEffect, useRef, useState } from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotels from "./MyHotels/MyHotels";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

function Profile(props) {
  //   let location = useLocation();
  //   const linkProfileRef = useRef(null);
  //   const removeActiveclass = (refElement) => {
  //     refElement.current.classList.remove("active");
  //   };

  //   useEffect(() => {
  //     console.log(location);
  //     if (location.pathname === "/profil/hotele") {
  //       removeActiveclass(linkProfileRef);
  //     }
  // 	if (location.pathname === "/profil") {
  // 		linkProfileRef.current.classList.add("active");
  // 	  }

  //   }, [location]);

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
            <Route path="hotele" element={<MyHotels />} />
          </Routes>
        </div>
        <p>...</p>
      </div>
    </div>
  );
}

export default Profile;
