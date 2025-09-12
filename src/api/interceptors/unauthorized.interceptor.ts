import { axiosClient } from "../axios-client";

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) localStorage.removeItem("token");

    return Promise.reject(error);
  },
);
