/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";
import { merchant_register, merchant_login } from "../utils/api";
import { isloading, user, notify } from "../store/actionTypes";

export default {
  createUserAccount: (data) => async (dispatch) => {
    try {
      await dispatch(isloading(true));
      const response = await Axios.post(merchant_register, data);
      if (response.data?.payload?.success) {
        await dispatch(isloading(false));
        await dispatch(user(response.data));
        return response.data;
      } else {
        await dispatch(isloading(false));
        await dispatch(notify(response?.data));
      }
    } catch (error) {
      await dispatch(isloading(false));
      await dispatch(notify(error?.response?.data?.payload));
      throw error;
    }
  },
  loginUserAccount: (data) => async (dispatch) => {
    try {
      await dispatch(isloading(true));
      const response = await Axios.post(merchant_login, data);
      if (response.data?.payload?.success) {
        await dispatch(isloading(false));
        await dispatch(user(response.data));
        return response.data;
      } else {
        await dispatch(isloading(false));
        await dispatch(notify(response?.data));
      }
    } catch (error) {
      await dispatch(isloading(false));
      await dispatch(notify(error?.response?.data?.payload));
      throw error;
    }
  },
};
