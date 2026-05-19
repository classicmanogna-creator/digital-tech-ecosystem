import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./navbar.css";

const Navbar = () => {
  const { cart, user, logout } = useContext(AppContext);

  return (
    <nav className="navbar">
      <h2>Tech Ecosystem</h2>

      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/marketplace" className={({ isActive }) => isActive ? "active" : ""}>Marketplace</NavLink>
        <NavLink to="/Notes" className={({ isActive }) => isActive ? "active" : ""}>Notes</NavLink>
        <NavLink to="/rental" className={({ isActive }) => isActive ? "active" : ""}>Rental</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/repair" className={({ isActive }) => isActive ? "active" : ""}>Repair</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>Cart</NavLink>
      </div>

      <div className="right">
        <span>🛒 {cart.length}</span>

        {user ? (
          <>
            <NavLink to="/profile">{user.name}</NavLink>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;