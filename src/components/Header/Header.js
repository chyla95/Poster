import { useState } from "react";
import { MdLogin, MdLogout, MdMessage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deauthenticateActionCreator } from "../../store/auth-slice";
import AuthenticationModal from "../General/Overlays/Modals/AuthenticationModal";
//import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header(props) {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [isAuthenticationModalVisible, setIsAuthenticationModalVisible] =
    useState(false);

  const showAuthenticationModal = (event) => {
    setIsAuthenticationModalVisible(true);
  };
  const hideAuthenticationModal = async (event) => {
    setIsAuthenticationModalVisible(false);
  };

  const signOutHandler = () => {
    dispatch(deauthenticateActionCreator());
  };

  return (
    <header className={classes.header}>
      <AuthenticationModal
        isVisible={isAuthenticationModalVisible}
        hide={hideAuthenticationModal}
      />
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
        {!token && (
          <button className={classes.button} onClick={showAuthenticationModal}>
            <MdLogin size={18} />
            SignIn
          </button>
        )}
        {token && user && (
          <button className={classes.button} onClick={signOutHandler}>
            <MdLogout size={18} />
            <p>SignOut - {user.username}</p>
          </button>
        )}
      </p>
    </header>
  );
}

export default Header;
