import axios from 'axios';
import { setLogInModal, setSignUpModal } from './modals.js';
import { toast } from "react-toastify";
import api from '../../api';

export const GET_USER_LOGIN = 'GET_USER_LOGIN';
export const GET_USER_SIGNUP = 'GET_USER_SIGNUP';

export const getUserLogin = (username, password) => (dispatch) => {
  const userData = { "userName": username, "password": password };

  axios.post(`${api.host}${api.login}`, userData)
    .then((res) => {
      dispatch({
        type: GET_USER_LOGIN,
        payload: res.data,
      });
      dispatch(setLogInModal(false));
      return;
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

export const getUserSignUp = (user, social) => (dispatch) => {
  let endpoint = api.signup;
  if (social) {
    endpoint = `${api.login}/${social}`;
  }
  const userData = user;
  axios.post(`${api.host}${endpoint}`, userData)
    .then((res) => {
      dispatch({
        type: GET_USER_SIGNUP,
        payload: res.data,
      })
      dispatch(setLogInModal(false))
      return;
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