import React from 'react';
import '../../styles/button.scss';

export default function Button({ text, bgColor, color, onClick , classList}) {
  return (
    <button className={`button-container ${classList || ''}`} style={{ backgroundColor: bgColor, color }} onClick={() => onClick()}>
      {text}
    </button>
  );
};