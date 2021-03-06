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
    <div className="parentDivMenu">
      <svg
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="menuIcon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
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
        openMenu={openMenu}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 55, horizontal: "right" }}
      >
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          className="NavLink1"
          to="/about"
        >
          About us
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          className="NavLink1"
          to="/estate"
        >
          Properties
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          className="NavLink1"
          to="/contact"
        >
          Contact
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={NavLink}
          className="NavLink1"
          to="/login"
        >
          Login
        </MenuItem>
      </Menu>
    </div>
  );
}
