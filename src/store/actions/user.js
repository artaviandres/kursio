import axios from 'axios';
import { toast } from "react-toastify";
import api from '../../api';

export const GET_USER_LOGIN = 'GET_USER_LOGIN';
export const GET_USER_SIGNUP = 'GET_USER_SIGNUP';

export const getUserLogin = (username, password) => (dispatch)=> {
  const userData = { "userName": username, "password": password };

  axios.post(`${api.host}${api.login}`, userData)
    .then((res) => {
      return dispatch({
        type: GET_USER_LOGIN,
        payload: res,
      })
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

export const getUserSignUp = (user) => (dispatch)=> {
  const userData = user;
  console.log(user);
  axios.post(`${api.host}${api.signup}`, userData)
    .then((res) => {
      console.log(res);
      return dispatch({
        type: GET_USER_SIGNUP,
        payload: res,
      })
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