import axios from "axios";
import config from "../../../config/config";

export const Login = (payload) => {
  return axios.post(`${config.default.login}`, payload );
};
