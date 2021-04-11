import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { handleActions } from "redux-actions";
import { user, isloading, notify, drawer, product } from "../actionTypes";

const initialState = {
  user: {
    email: "adexdsamson@gmail.com",
    lockUntil: 0,
    loginAttempt: 1,
    newDevice: true,
    token:
      "eyJhbGciOiJIUzI1NiJ9.NjA2NmZjNGI4OGI0Y2IwMDE1ZGI5ZThh.9-R8Mj5TY21TY-pwR_U_-UxyOYVVrcKPV02qV2rZBbA",
    verified: false,
    _id: "6066fc4b88b4cb0015db9e8a",
  },
  isloading: false,
  notify: null,
  drawer: false,
  product: [],
};

const otherReducer = handleActions(
  {
    [user]: (state, { payload: { merchant } }) => {
      return { ...state, user: merchant };
    },
    [isloading]: (state, { payload }) => {
      return { ...state, isloading: payload };
    },
    [notify]: (state, { payload }) => {
      return { ...state, notify: payload };
    },
    [drawer]: (state, { payload }) => {
      return { ...state, drawer: payload };
    },
    [product]: (state, { payload }) => {
      return { ...state, product: payload };
    },
  },
  initialState
);

export default combineReducers({
  form,
  otherReducer,
});
