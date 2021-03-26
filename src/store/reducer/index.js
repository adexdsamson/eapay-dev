import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { handleActions } from 'redux-actions';
import { user, isloading, error } from '../actionTypes';

const initialState = {
  user: null,
  isloading: false,
  error: null
}


const otherReducer = handleActions({
  [user]: (state, { payload: { data } }) => {
    return { ...state, user: data };
  },
  [isloading]: (state, { payload}) => {
    return { ...state, isloading: payload };
  },
  [error]: (state, { payload}) => {
    return { ...state, error: payload };
  },
}, initialState)


export default combineReducers({
  form,
  otherReducer
})