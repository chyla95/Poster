import { createSlice } from "@reduxjs/toolkit";
import { getUser, signIn } from "../services/authentication";
import { userActions } from "./user-slice";

const initialState = {
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticate(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
    deauthenticate(state, action) {
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export const authenticateActionCreator = (data) => {
  // Redux automatically passes the "dispatch" object to the returned action
  return async (dispatch) => {
    // Side effects here
    const { username, password } = data;
    const response = await signIn(username, password);
    localStorage.setItem("token", response.token);

    // We can call multiple dispatch functions from the ActionCreator;
    // We can also dispatch functions from other slices!
    dispatch(authActions.authenticate({ token: response.token }));

    const user = await getUser(response.token);
    dispatch(userActions.update(user));
  };
};

export const deauthenticateActionCreator = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(authActions.deauthenticate());
  };
};
