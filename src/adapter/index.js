/* eslint-disable import/no-anonymous-default-export */
import { request } from '../utils/request'
import {
  merchant_register,
  merchant_login,
  merchant_verify,
} from "../utils/api";
import { isloading, user, notify } from "../store/actionTypes";

export default {
  createUserAccount: (data) => async (dispatch) => {
    try {
      await dispatch(isloading(true));
      const response = await request({
        url: merchant_register, 
        method: 'post',
        data
      });
      if (response.data?.success) {
        await dispatch(isloading(false));
        await dispatch(user(response.data));
        return response.data;
      } else {
        await dispatch(isloading(false));
        await dispatch(notify(response?.data));
      }
    } catch (error) {
      await dispatch(isloading(false));
      if (error?.response) {
        // if (error?.response?.data?.message === "Unauthenticated") {
        //   removeLocalStorageToken();
        // }
        // TODO notify when there is no network
        await dispatch(notify("Network error - check your connection"));
      } else if (error?.request) {
        console.log("we");
        await dispatch(notify("Network error - check your connection"));
      }
      throw error;
    }
  },
  loginUserAccount: (data) => async (dispatch) => {
    try {
      await dispatch(isloading(true));
      const response = await request({
        url: merchant_login, 
        method: 'post',
        data
      });
      if (response.data?.success) {
        await dispatch(isloading(false));
        await dispatch(user(response.data));
        return response.data;
      } else {
        await dispatch(isloading(false));
        await dispatch(notify(response?.data));
      }
    } catch (error) {
      await dispatch(isloading(false));
      if (error?.response) {
        // if (error?.response?.data?.message === "Unauthenticated") {
        //   removeLocalStorageToken();
        // }

        await dispatch(notify(error?.response?.data?.payload));
      } else if (error?.request) {
        await dispatch(notify("Network error - check your connection"));
      }
      throw error;
    }
  },

  // TODO reset password

  verifyUserAccount: (data, query) => async (dispatch) => {
    console.log(data, query)
    try {
      await dispatch(isloading(true));
      const response = await request({
        url: merchant_verify,
        data: data,
        method: 'post',
        params: query,
      });
    } catch (error) {
      await dispatch(isloading(false));
      if (error?.response) {
        // if (error?.response?.data?.message === "Unauthenticated") {
        //   removeLocalStorageToken();
        // }
        await dispatch(notify(error?.response?.data?.payload));
      } else if (error?.request) {
        await dispatch(notify("Network error - check your connection"));
      }
      throw error;
    }
  },
};
