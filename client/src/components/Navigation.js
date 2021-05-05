import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <div>
      <svg
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        className="menuIcon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <Menu
        id="simple-menu"
        className="Menu"
        openMenu={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 55, horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink className="NavLink1" to="/about">
            About us
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink className="NavLink1" to="/estate">
            Properties
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink className="NavLink1" to="/contact">
            Contact
          </NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
