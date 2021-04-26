import { NavLink } from "react-router-dom";
import "./Navigation.css";



function Navigation() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="menuIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  );
}

export default Navigation;


// (
//   <nav className="Navigation">
//     <div className="Navigation__item">
//       <NavLink to="/about">About us</NavLink>
//     </div>
//     <div className="Navigation__item">
//       <NavLink to="/estate">Real Estate</NavLink>
//     </div>
//     <div className="Navigation__item">
//       <NavLink to="/contact">Contact</NavLink>
//     </div>
//   </nav>
// );