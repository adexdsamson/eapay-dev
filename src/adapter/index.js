/* eslint-disable import/no-anonymous-default-export */
import Axios from 'axios';
import { merchant_register, merchant_login } from '../utils/api';
import { isloading, user, error } from '../store/actionTypes';

export default {
  createUserAccount: (data) => async dispatch => {
    try {
      await dispatch(isloading(true));
      const response = await Axios.post(merchant_register, data);
      if (response){ 
        await dispatch(isloading(false))
        await user(response.data)
      }
      return response.data
    } catch (error) {
      await dispatch(isloading(false));
      throw error;
    }
  },
  loginUserAccount: (data) => async dispatch => {
    try {
      await dispatch(isloading(true));
      const response = await Axios.post(merchant_login, data);
      if (response){ 
        await dispatch(isloading(false))
        await user(response.data)
      }
      return response.data
    } catch (error) {
      await dispatch(isloading(false));
      await dispatch(error(error?.response?.data?.payload));
      throw error
    }
  }
}