import axios from "axios";
import config from "../config/config";

const api = axios.create({
  baseURL: config.default.baseUrl,
});

axios.interceptors.request.use(
  function (config) {
    console.log("in request")
    // Do something before request is sent
    config["headers"]["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    return config;
  },
  function (error) {
    console.log("first")
    // Do something with request error
    return Promise.reject(error);
  }
);


export default api;
