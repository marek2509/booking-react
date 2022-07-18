import React from "react";
import styles from "./Menu.module.css";
import useAuth from "../../hooks/useAuth";

function Menu() {
  const [auth, setAuth] = useAuth();

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
