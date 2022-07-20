<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import MyHotels from "./MyHotels/MyHotels";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

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
            <Route path="hotele" element={<MyHotels />} />
          </Routes>
        </div>
        <p>...</p>
      </div>
    </div>
  );
=======
import React from 'react';
import ProfileDetails from './ProfileDetails/ProfileDetails';
import MyHotels from './MyHotels/MyHotels';
import { NavLink, Route, Routes } from 'react-router-dom';

function Profile(props) {
	return (
		<div className="card">
			<div className="card-header">
				<h2>Mój profil</h2>
			</div>
			<div className="card-body">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink className="nav-link" to="edytuj">
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
						<Route path="edytuj" element={<ProfileDetails />} />
						<Route path="hotele" element={<MyHotels />} />
					</Routes>
				</div>
				<p>...</p>
			</div>
		</div>
	);
>>>>>>> 04b95668f2a66f8a5f2734296a04836233c97290
}

export default Profile;
