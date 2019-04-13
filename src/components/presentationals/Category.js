import React from 'react';
import { Col } from 'react-flexbox-grid';
import '../../styles/category.scss';

export default function Category({ icon, text, key }) {
  return (
    <Col md={3} xs={12} className="category-col-wrapper">
      <div className="category-container">
        {icon}
        {text}
      </div>
    </Col>
  )
};