import React, { useState } from "react";
import styles from "./Menu.module.css";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

function Menu() {
  const [auth, setAuth] = useAuth();
  const [menuIsActive, setMenuActive] = useState(true);
  const [profileIsActive, setProfileActive] = useState(false);

  let activeLink = ({ isActive }) =>
    styles.menuItemLink + " " + (isActive ? styles.menuItemActive : undefined);

  const login = (e) => {
    e.preventDefault();
    // login
    setAuth(true);
  };

  const logout = (e) => {
    e.preventDefault();
    // logout
    setAuth(false);
  };

  return (
    <div className={`${styles.menuContainer}`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink exact to="/" className={activeLink}>
            Home
          </NavLink>
        </li>

        {auth ? (
          <>
            <li className={styles.menuItem}>
              <NavLink to="/profil" className={activeLink}>
                Moj profil
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <a href="#" onClick={logout} className={styles.menuItemLink}>
                Wyloguj
              </a>
            </li>
          </>
        ) : (
          <li className={styles.menuItem}>
            <a href="#" onClick={login} className={styles.menuItemLink}>
              Zaloguj
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
