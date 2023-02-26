import { MdLogin, MdMessage } from "react-icons/md";

import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Poster
      </h1>
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
