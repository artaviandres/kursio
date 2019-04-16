import React from 'react';
import '../../styles/text.scss';

export default function Text({ type, size, color, children, margin }) {
  return (
    <p
      style={{ color, fontSize: size, margin }}
      className={type}
    >
      {children}
    </p>
  );
}