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
}

export default Profile;
