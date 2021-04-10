import { createActions } from "redux-actions";

export const { user, isloading, notify, drawer, product } = createActions({
  USER: (data) => data,
  ISLOADING: (state) => state,
  NOTIFY: (state) => state,
  DRAWER: (state) => state,
  PRODUCT: (state) => state,
});
