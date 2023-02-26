import { MdLogin, MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";
//import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <NavLink
        to="/"
        className={(state) => {
          return !state.isActive
            ? classes["logo"]
            : classes["logo"] + " " + classes["logo-active"];
        }}
        end
      >
        <h1>
          <MdMessage />
          Poster
        </h1>
      </NavLink>

      <p>
        <button className={classes.button} onClick={() => console.log("...")}>
          <MdLogin size={18} />
          Log In
        </button>
      </p>
    </header>
  );
}

export default Header;
