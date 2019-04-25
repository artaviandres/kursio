import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Card } from 'semantic-ui-react'
import '../../styles/testimonial.scss';

export default function Testimonial({ picture, name, position, quote, hasStory }) {
  const hasStoryLink = (
    <a className="full-story-link">
      See full story
    </a>
  );
  
  const quoteText = (
    <i className="testing">"{quote}"</i>
  );

  return (
    <Col md={3} xs={12} className="testimonial-container">
      <Card
        image={picture}
        header={name}
        meta={position}
        description={quoteText}
        extra={hasStory ? hasStoryLink : null}
      />
    </Col>
  )
};