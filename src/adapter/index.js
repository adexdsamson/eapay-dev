/* eslint-disable import/no-anonymous-default-export */
import { request } from '../utils/request'
import {
  merchant_register,
  merchant_login,
  merchant_verify,
  merchant_create_product,
  merchant_product,
} from "../utils/api";
import { isloading, user, notify, product } from "../store/actionTypes";

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

  createProduct: (data) => async dispatch => {
    try {
      await dispatch(isloading(true));
      const response = await request({
        url: merchant_create_product,
        data: data,
        method: 'post',
      });
      if (response.data?.success) {
        await dispatch(isloading(false));
        await dispatch(product(response.data));
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

  getProducts: () => async dispatch => {
    try {
      await dispatch(isloading(true));
      const response = await request({
        url: merchant_product,
        method: 'get',
      });
      if (response.data?.success) {
        await dispatch(isloading(false));
        await dispatch(product(response.data));
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
  }
};
