import React from 'react';
import '../../styles/input-with-action.scss';

export default function InputWithAction({ placeholder, action, height, style, onChange }) {
  return (
    <div className="input-with-action-container" style={style}>
      <input placeholder={placeholder} style={{ height }} onChange={onChange} />
      <button style={{ height }} className="animation-hover">{action}</button>
    </div>
  )
}