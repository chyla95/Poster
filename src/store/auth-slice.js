import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../services/authentication";

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
  };
};

export const deauthenticateActionCreator = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(authActions.deauthenticate());
  };
};
