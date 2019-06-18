import axios from 'axios';
import api from '../../api';

export const GET_USER_DATA = 'GET_USER_DATA';

export const getUserData = (id, history) => {
  return function action(dispatch) {
    const userId = { "userId": id };
    axios.post(`${api.host}${api.user.userHost}${api.user.getUserDataById}`, userId)
      .then((res) => {
        dispatch({
          type: GET_USER_DATA,
          payload: res.data,
        })
      })
      .catch((err) => {
        history.push('/404');
      });
  }
};