import React from 'react';

export default function QuizOption({ children, onClick }) {
  return (
    <div className="quiz-option" onClick={onClick}>
      {children}
    </div>
  )
};