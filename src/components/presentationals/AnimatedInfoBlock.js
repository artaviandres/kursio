import React from 'react';
import { Col } from 'react-flexbox-grid';
import '../../styles/animated-info-block.scss';

export default function AnimatedInfoBlock({ number, symbology, text }) {
  return (
    <Col md={3} xs={12}>
      <div className="animated-info-block-container">
        <h1>{number}{symbology}</h1>
        <h2>{text}</h2>
      </div>
    </Col>
  );
}