import React from 'react';
import '../../styles/title.scss';

export default function Title({ children, fontSize, margin, textAlign, lineHeight }) {
  return <h1 style={{ fontSize, margin, textAlign, lineHeight }} className="main-title">{children}</h1>
}