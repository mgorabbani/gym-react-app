import axios from "axios";

export default (token = null) => {
  axios.defaults.baseURL = 'https://gymxpert-api.herokuapp.com/';
  if (token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
