import React, { useState } from 'react';
import QuizOption from '../../presentationals/Renat/QuizOption';
import QuizProgress from '../../presentationals/Renat/QuizProgress';
import QuizNav from '../../presentationals/Renat/QuizNav';
import './quiz.scss';

export default function Quiz({ history }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([
    {
      text: 'Where are you from?',
      options: ['Costa Rica', 'Russia', 'United States', 'Colombia'],
      answered: false,
      chosenOption: false,
    },
    {
      text: 'What is your name?',
      options: ['Andres', 'Artavia', 'Herrera', 'Andres2'],
      answered: false,
      chosenOption: false,
    },
    {
      text: 'Where are you from?',
      options: ['Costa Rica', 'Russia', 'United States', 'Colombia'],
      answered: false,
      chosenOption: false,
    },
    {
      text: 'Where are you from?',
      options: ['Costa Rica', 'Russia', 'United States', 'Colombia'],
      answered: false,
      chosenOption: false,
    },
  ]);
  
  const selectOption = (option) => {
    const questionsDuplicated = [...questions];
    questionsDuplicated[currentQuestion].chosenOption = option;
    questionsDuplicated[currentQuestion].answered = true;
    setQuestions(questionsDuplicated);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      history.push('/course/renat/quiz/results');
    }
  }

  return (
    <div className="quiz-container">
      <QuizProgress questions={questions} />
      <h1 className="quiz-question">{questions[currentQuestion].text}</h1>
      {questions[currentQuestion].options.map((option) => <QuizOption onClick={() => selectOption(option)}>{option}</QuizOption>)}
      <QuizNav />
    </div>
  )
}