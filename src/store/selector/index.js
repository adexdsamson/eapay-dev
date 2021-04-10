import { createSelector } from 'reselect';

const otherReducer = ({ otherReducer }) => otherReducer;


export const getLoaderState = createSelector(
  [otherReducer],
  (state) => state.isloading
);
export const getDrawerState = createSelector(
  [otherReducer],
  (state) => state.drawer
);
export const getNotifyState = createSelector(
  [otherReducer],
  (state) => state.notify
);
export const getUserState = createSelector(
  [otherReducer],
  (state) => state.user
);
export const getProductState = createSelector(
  [otherReducer],
  (state) => state.product
);