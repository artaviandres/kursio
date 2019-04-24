import React from 'react';
import { Card, Rating } from 'semantic-ui-react'
import { FaCheckCircle, FaRegEye, FaRegClock } from "react-icons/fa";
import Button from '../presentationals/Button';
import Text from '../presentationals/Text';
import '../../styles/course-card.scss';
import '../../styles/layout.scss';

export default function CourseCard({ title, category, rating, numberOfRatings, price, description, image, type, progress,views }) {
  const setCardType = () => {
    switch (type) {
      case "userProfile":
        return (
          <Card.Content className="rating-and-prices user-profile">
            <div style={{ marginBottom: "10px" }}>
              <Rating icon='star' defaultRating={rating} maxRating={5} disabled size='small' />
              <label>{rating}/5</label>
              <label style={{ marginLeft: "5px" }}>({numberOfRatings})</label>
              <p style={{ color: '#ccc' }} className="position-right"><FaRegEye className="icon-text-right" /> {views}</p>
            </div>
            <div>
              <p className="position-left"><FaCheckCircle className="icon-text-right" color="#19c895" />Published</p>
              <p className="position-right bold">{price}</p>
            </div>
          </Card.Content>
        )
        break;
      case "userProfileProgress":
        return (
          <Card.Content className="buttons-section">
            <Button text="continue" color="#fff" classList="animation-hover margin-bottom-short button-secondary-color button-not-rounded full-width-button" />
            <Text color="#ccc">Started March 22, 2019</Text>
          </Card.Content>
        )
        break;

      default:
        return (
          <Card.Content className="rating-and-prices">
            <Rating icon='star' defaultRating={rating} maxRating={5} disabled size='small' />
            <label>{rating}/5</label>
            <label style={{ marginLeft: "5px" }}>({numberOfRatings})</label>
            <p className="position-right bold">{price}</p>
          </Card.Content>
        )
        break;
    }
  }
  return (
    <Card className="course-card-container">
      <img style={{ backgroundImage: `url(${image})` }} />
      <Card.Content>
        <Card.Meta>
          <span className='date'>{category}</span>
        </Card.Meta>
        <Card.Header className="course-card-header">{title}</Card.Header>
        {type !== "userProfileProgress" ?
          <Card.Description>{description}</Card.Description>
          : <Card.Description>
              <div style={{display:"flex", marginBottom:"10px"}}>
                <div class="position-left">
                  <FaRegClock className="icon-text-right"/>
                  <span>6 hours</span>
                </div>
                <div class="position-right">
                  <span>{progress}% Complete</span>
                </div>
              </div>
              <div class="courses_single_progress_bar">
                <div class="courses_single_progress_filled" style={{width: `${progress}%`}}>
                </div>
              </div>
              {setCardType()}
          </Card.Description>}
      </Card.Content>
      {type !== "userProfileProgress" && setCardType()}
    </Card>
  );
}