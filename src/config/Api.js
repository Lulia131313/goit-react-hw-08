import axios from "axios";

export const Api = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  Api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  Api.defaults.headers.common.Authorization = ``;
};
