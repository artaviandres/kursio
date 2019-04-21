import React from 'react';
import { Col } from 'react-flexbox-grid';
import '../../styles/footer-block.scss';

export default function FooterBlock({ children }) {
  return (
    <Col md={4} xs={12} className="footer-block">
      {children}
    </Col>
  );
};