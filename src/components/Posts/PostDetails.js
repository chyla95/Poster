import { useState } from "react";
import classes from "./PostDetails.module.css";

function PostDetails(props) {
  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    // To update component's state correctly, it is required to pass a nested function as the setClicks argument.
    // The function automatically gets previous state as an argument, so "previousState" === "clicks"
    setClicks((previousState) => {
      return previousState + 1;
    });
  };

  return (
    <div className={classes.details} onClick={clickHandler}>
      <p className={classes.author}>{props.post.author}</p>
      <p className={classes.message}>{props.post.message}</p>
      <p className={`${classes.clicks}`}>
        <b>Clicks:</b> {clicks}
      </p>
    </div>
  );
}

export default PostDetails;
