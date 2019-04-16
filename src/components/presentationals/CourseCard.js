import React from 'react';
import { Card, Rating } from 'semantic-ui-react'
import '../../styles/course-card.scss';

export default function CourseCard({ title, category, rating, numberOfRatings, price, description, image }) {
  return (
    <Card className="course-card-container">
      {/* <Image src={image} /> */}
      <img style={{ backgroundImage: `url(${image})` }} />
      <Card.Content>
        <Card.Meta>
          <span className='date'>{category}</span>
        </Card.Meta>
        <Card.Header className="course-card-header">{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content className="rating-and-prices">
        <Rating icon='star' defaultRating={rating} maxRating={5} disabled size='small' />
        <label>{rating}/5</label>
        <label>({numberOfRatings})</label>
        <p>{price}</p>
      </Card.Content>
    </Card>
  );
}