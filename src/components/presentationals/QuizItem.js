import React from 'react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import STYLES from '../../styles/variables.scss';
import '../../styles/quiz-item.scss';

export default function QuizItem({ courseUrl, quizUrl, quizStatus, quizPercentage }) {
    return (
        <div className="stm-lms-user-quiz">
            <div className="title">
                <a className="green-url-hover" href={courseUrl}>How to be a DJ? Make Electronic Music</a>
            </div>
            <a className="green-url name" href={quizUrl}>Final Middle Quiz</a>
            <div className="progress">
                <div className="progress_bar">
                    <div className="filled passed" style={{ width: `${quizPercentage}%` }}></div>
                </div>
                <div className="progress-status">{quizPercentage}%</div>
            </div>
            <div className="status">
                {quizStatus === "passed" ?
                    <div className="passed"><FaCheckCircle className="icon-text-right" color={STYLES["secondary-color"]} />Passed</div>
                    : <div className="failed"><FaTimesCircle className="icon-text-right" color={STYLES["rose-color"]} />Failed</div>
                }
            </div>
        </div>
    );
};