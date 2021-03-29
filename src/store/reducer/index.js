import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { handleActions } from "redux-actions";
import { user, isloading, notify, drawer } from "../actionTypes";

const initialState = {
  user: null,
  isloading: false,
  notify: null,
  drawer: false
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
  },
  initialState
);

export default combineReducers({
  form,
  otherReducer,
});
