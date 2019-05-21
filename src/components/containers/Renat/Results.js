import React from 'react';
import Header from '../../presentationals/Header';
import Title from '../../presentationals/Title';
import PlanCard from '../../presentationals/Renat/PlanCard';
import './results.scss';

//img
import Profile from '../../../assets/img/profile.svg';
import Cancel from '../../../assets/img/cancel.svg';

export default function Results() {
  const premiumPlan = [
    'Lifetime access to courses related to your color',
    'Lifetime access to courses related to your color',
    'Lifetime access to courses related to your color',
    'Lifetime access to courses related to your color',
    'Lifetime access to courses related to your color',
  ]
  return (
    <div>
      <Header />
      <div className="results-container">
        <div className="results-welcome-text">
          <Title fontSize="48px" margin="0">Congratulations!</Title>
          <p>You've successfully completed Renat Kashapov's personality test.</p>
          <p>Your color is: <span>WHITE</span></p>
        </div>
        <div className="results-plan-cards">
          <PlanCard 
            image={Cancel}
            title='Free Plan'
            bullets={premiumPlan}
            button='Go to Homepage'
          />
          <PlanCard
            image={Profile}
            title='Premium Plan'
            bullets={premiumPlan}
            button='Purchase'
            promoCode
          />
        </div>
      </div>
    </div>
  )
};