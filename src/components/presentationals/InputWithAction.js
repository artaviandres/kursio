import React from 'react';
import '../../styles/input-with-action.scss';

export default function InputWithAction({ placeholder, action, height }) {
  return (
    <div className="input-with-action-container">
      <input placeholder={placeholder} style={{ height }} />
      <button style={{ height }} className="animation-hover">{action}</button>
    </div>
  )
}