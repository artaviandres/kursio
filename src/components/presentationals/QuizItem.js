import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

import '../../styles/button.scss';

export default function QuizItem({ courseUrl, quizUrl, quizStatus, quizPercentage }) {
    return (
        <div className="stm-lms-user-quiz">
            <div className="stm-lms-user-quiz__title">
                <a className="green-url-hover" href={courseUrl}>How to be a DJ? Make Electronic Music</a>
            </div>
            <a className="green-url stm-lms-user-quiz__name" href={quizUrl}>Final Middle Quiz</a>
            <div className="stm-lms-user-quiz__progress">
                <div className="stm-lms-user-quiz__progress_bar">
                    <div className="filled passed" style={{ width: `${quizPercentage}%` }}></div>
                </div>
                <div className="progress-status">{quizPercentage}%</div>
            </div>
            <div className="stm-lms-user-quiz__status">
                {quizStatus === "passed" ?
                    <div className="status passed"><FaCheckCircle className="icon-text-right" color="#19c895" />Passed</div>
                    : <div className="status passed"><FaCheckCircle className="icon-text-right" color="#19c895" />Failed</div>
                }
            </div>
        </div>
    );
};