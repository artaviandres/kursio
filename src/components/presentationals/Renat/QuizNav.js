import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function QuizNav() {
  return (
    <div className="quiz-nav">
      <div className="quiz-nav-item previous">
        <a>
          <FiArrowLeft size={32} />
        </a>
      </div>
      <div className="quiz-nav-item next">
        <a>
          <span>Next question</span>
          <span className="next-arrow">
            <FiArrowRight size={32} />
          </span>
        </a>
      </div>
    </div>
  )
};