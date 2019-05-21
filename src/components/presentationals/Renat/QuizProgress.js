import React from 'react';

export default function QuizProgress({ questions }) {
  return (
    <div className="quiz-progress">
      {questions.map((item, index) => <div className={questions[index].answered ? 'quiz-progress-item active' : 'quiz-progress-item'} />)}
    </div>
  )
};