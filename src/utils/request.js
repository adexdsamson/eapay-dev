import _axios from "axios";
import omit from "lodash/omit";
import axiosRetry from "axios-retry";
const axios = _axios.create();


const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(axios, {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
});

export const request = async ({
  url,
  method,
  params,
  data,
  headers,
  token,
}) => {
  const authorization = token || localStorage.getItem("");

  let config = {
    method,
    params,
    data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authorization}`,
      ...headers,
    },
  };

  if (method === "GET" || method === "DELETE") {
    config = omit(config, ["data"]);
  }

  const result = await axios({
    url: url,
    ...config,
  });

  return result;
};