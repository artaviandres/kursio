import React from 'react';
import '../../styles/title.scss';

export default function Title({ children, fontSize, margin, textAlign, lineHeight, color }) {
  return <h1 style={{ fontSize, margin, textAlign, lineHeight, color }} className="main-title">{children}</h1>
}