import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Title from '../Title';
import Button from '../Button';
import InputWithAction from '../InputWithAction';

export default function PlanCard({ image, title, bullets, button, promoCode }) {
  const [hasPromoCode, setHasPromoCode] = useState(false);
  const [promoCodeText, setPromoCodeText] = useState('');
  const inputActionStyles = {
    display: 'flex',
    border: '1px solid #e1e2e4',
    width: '90%',
    'margin-top': '33px',
  };
  return (
    <div className="plan-card-container">
      <div className="plan-card-wrapper">
        <img src={image} />
        <Title fontSize='36px' margin='0 0 10px 0'>{title}</Title>
        {bullets.map((bullet) => (
          <div className="plan-card-bullet">
            <FiCheckCircle />
            <p>{bullet}</p>
          </div>
        ))}
        {hasPromoCode
          ? <InputWithAction
            placeholder="Enter Promo Code"
            action="Redeem" height="40px"
            style={inputActionStyles}
            onChange={(e) => setPromoCodeText(e.target.text)}
          />
          : <Button text={button} classList="plan-card-button" />
        }
        {promoCode && <a className="plan-card-promo-code" onClick={() => setHasPromoCode(!hasPromoCode)}>{hasPromoCode ? 'Cancel' : 'Do you have a promo code?'}</a>}
      </div>
    </div>
  );
};