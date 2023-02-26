import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./Authenticate.module.css";
import { authActions, authenticateActionCreator } from "../../store/auth-slice";

function Authenticate(props) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("TestUser");
  const [password, setPassword] = useState("TestPassword");
  const navigate = useNavigate();

  const onUsernameChangeHandler = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const onPasswordChangeHandler = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
    };

    dispatch(authenticateActionCreator(data));
    //dispatch(authActions.authenticate(data));

    navigate("/");
    if (props.onSubmit) props.onSubmit();
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      <h2>Sign In</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          required
          onChange={onUsernameChangeHandler}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          onChange={onPasswordChangeHandler}
          value={password}
        />
      </div>
      <div className={`${styles["actions"]}`}>
        <button autoFocus>Sign In</button>
      </div>
    </form>
  );
}

export default Authenticate;
