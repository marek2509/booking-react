import React, { useContext } from 'react';
import styles from './Menu.module.css';
import AuthContext from '../../context/authContext';

function Menu() {
	const auth = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		auth.login();
	};

	const logout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<div className={`${styles.menuContainer}`}>
			<ul className={styles.menu}>
				<li className={styles.menuItem}>
					<a href="#">Home</a>
					
				</li>

				<li className={styles.menuItem}>
					{auth.isAuthenticated ? (
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
