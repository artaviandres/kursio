import React from 'react';
import '../../styles/button.scss';

export default function Button({ text, bgColor, color, onClick }) {
  return (
    <button className="button-container" style={{ backgroundColor: bgColor, color }} onClick={() => onClick()}>
      {text}
    </button>
  );
};