import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react'
import QuizOption from '../../presentationals/Renat/QuizOption';
import QuizProgress from '../../presentationals/Renat/QuizProgress';
import QuizNav from '../../presentationals/Renat/QuizNav';

import { getRenatQuizQuestions } from '../../../store/actions/Renat/renat';
import './quiz.scss';

function Quiz({ history, getQuestions, questions }) {
  useEffect(() => {
    getQuestions();
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const selectOption = (option) => {
    const questionsLength = questions.length;
    setCurrentQuestion(currentQuestion + 1);
    setProgress(Math.round((currentQuestion + 1) / questionsLength * 100));

    // const questionsDuplicated = [...questions];
    // questionsDuplicated[currentQuestion].chosenOption = option;
    // questionsDuplicated[currentQuestion].answered = true;
    // setQuestions(questionsDuplicated);
    // if (currentQuestion + 1 < questions.length) {
      // setCurrentQuestion(currentQuestion + 1);
    // } else {
    //   history.push('/course/renat/quiz/results');
    // }
  }

  return (
    <div className="quiz-container">
      {/* <QuizProgress questions={questions} /> */}
      <Progress percent={progress} inverted color='grey' progress className="quiz-progress-bar" />
      <h1 className="quiz-question">{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((option) => <QuizOption onClick={() => selectOption(option)}>{option.answer}</QuizOption>)}
      <QuizNav />
    </div>
  )
}

const mapStateToProps = (state) => ({
  questions: state.renatReducer.questions ? state.renatReducer.questions : [],
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getRenatQuizQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);