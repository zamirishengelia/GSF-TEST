import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await logout();
    navigate("/");
  };
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link className="Link-Color" to="/">
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          {isAuthenticated ? (
            <button className="Link-Color" onClick={logOut}>
              Logout
            </button>
          ) : (
            <Link className="Link-Color" to="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "1rem",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: "10px",
  },
};

export default NavBar;
