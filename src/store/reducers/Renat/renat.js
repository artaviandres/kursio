import { renatActions } from '../../actions';
 const initialState = {
  questions: '',
};
 const renatReducer = (state = initialState, action) => {
  switch (action.type) {
    case renatActions.GET_RENAT_QUIZ_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.payload
      });
    default:
      return state;
  }
};
 export default renatReducer;