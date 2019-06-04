import axios from 'axios';
import { toast } from "react-toastify";
import api from '../../../api';

export const GET_RENAT_QUIZ_QUESTIONS = 'GET_RENAT_QUIZ_QUESTIONS';
export const CREATE_RENAT_QUIZ_QUESTION = 'CREATE_RENAT_QUIZ_QUESTION';
export const DELETE_RENAT_QUIZ_QUESTION = 'DELETE_RENAT_QUIZ_QUESTION';

export const getRenatQuizQuestions = () => (dispatch) => {
  axios.get(`${api.host}${api.renat.questions}`)
    .then((res) => {
      dispatch({
        type: GET_RENAT_QUIZ_QUESTIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
};

export const createRenatQuizQuestion = (question, answers) => (dispatch) => {
  const formattedArray = [];
  answers.map((answer) => {
    const formattedObject = {
      "answer": answer[0],
      "color": answer[1],
      "direction": answer[2],
    };
    formattedArray.push(formattedObject);
  });

  axios.post(`${api.host}${api.renat.questions}`, {
    "question": question,
    "answers": formattedArray,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteRenatQuizQuestion = (questionId) => (dispatch) => {
  console.log(questionId);
  axios.delete(`${api.host}${api.renat.questions}`, {
    "colorQuestionId": questionId,
  })
    .then((res) => {
      console.log('success');
      toast.success('Question Deleted successfully!', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    })
    .catch((err) => {
      console.log('err');
      toast.error('Question could not be deleted, please try again later.', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    })
}