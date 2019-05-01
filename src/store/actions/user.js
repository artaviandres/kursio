import axios from 'axios';
import { toast } from "react-toastify";
import api from '../../api';

export const GET_USER_LOGIN = 'GET_USER_LOGIN';

export const getUserLogin = (username, password) => {
  const userData = { "userName": username, "password": password };

  axios.post(`${api.host}${api.login}`, userData)
    .then((res) => {
      return {
        type: GET_USER_LOGIN,
        payload: res,
      }
    })
    .catch((err) => {
      toast.error('Wrong Credentials, please try again.', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    })
}