import React from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../context/authContext';
import useAuth from '../../hooks/useAuth';

function Menu() {

	const [auth, setAuth] = useAuth();
console.log("auth", auth);
	const login = (e) => {
		e.preventDefault();
		// auth.login();
		setAuth(true);
	};

	const logout = (e) => {
		e.preventDefault();
		// auth.logout();
		setAuth(false);
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href="#">Home</a>
					
				</li>

				<li className={styles.menuItem}>
					{auth ? (
						<a href="#" onClick={logout}>
							Wyloguj
						</a>
					) : (
						<a href="#" onClick={login}>
							Zaloguj
						</a>
					)}
				</li>
				
			</ul>
		</div>
	);
}

export default Menu;
