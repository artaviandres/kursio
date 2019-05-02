import React from 'react';
import '../../styles/text.scss';

export default function Text({ type, size, color, children, margin, lineHeight }) {
  return (
    <p
      style={{ color, fontSize: size, margin, lineHeight }}
      className={type}
    >
      {children}
    </p>
  );
}