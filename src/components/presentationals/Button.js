import React from 'react';
import '../../styles/button.scss';

export default function Button({ text, bgColor, color, onClick , classList, width, icon }) {
  return (
    <button className={`button-container ${classList || ''}`} style={{ backgroundColor: bgColor, color, width }} onClick={onClick ? () => onClick() : null}>
      {icon} {text}
    </button>
  );
};