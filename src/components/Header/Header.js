import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Poster
      </h1>
      <p>
        <button className={classes.button} onClick={props.showAddPostModal}>
          <MdPostAdd size={18} />
          Add Post
        </button>
      </p>
    </header>
  );
}

export default Header;
