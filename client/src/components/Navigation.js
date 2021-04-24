import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__item">
        <NavLink to="/about">About us</NavLink>
      </div>
      <div className="Navigation__item">
        <NavLink to="/estate">Real Estate</NavLink>
      </div>
      <div className="Navigation__item">
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
