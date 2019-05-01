import React from 'react';
import { GoQuote } from 'react-icons/go';
import { FaFacebookF, FaTwitter, FaInstagram, FaVk } from "react-icons/fa";
import SocialMediaIcon from './SocialMediaIcon';
import '../../styles/testimonial.scss';
import STYLES from '../../styles/variables.scss';

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
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div className="testimonial-picture" style={{ backgroundImage: `url(${picture})` }} />
        <div className="testimonial-information">
          <h3>{name}</h3>
          <h6>{position}</h6>
          <p><GoQuote size={40} color={STYLES['primary-color']} />{quote}"</p>
          <hr />
          <div className="social-media">
            <SocialMediaIcon
              icon={<FaFacebookF size={18} />}
              margin="0 5px"
              backgroundColor={STYLES['primary-color']}
              link="https://www.facebook.com/artaviandres"
              width="30px"
              height="30px"
            />
            <SocialMediaIcon
              icon={<FaTwitter size={17} />}
              margin="0 5px"
              backgroundColor={STYLES['primary-color']}
              link="https://www.facebook.com/artaviandres"
              width="30px"
              height="30px"
            />
            <SocialMediaIcon
              icon={<FaInstagram size={18} />}
              margin="0 5px"
              backgroundColor={STYLES['primary-color']}
              link="https://www.facebook.com/artaviandres"
              width="30px"
              height="30px"
            />
            <SocialMediaIcon
              icon={<FaVk size={18} />}
              margin="0 5px"
              backgroundColor={STYLES['primary-color']}
              link="https://www.facebook.com/artaviandres"
              width="30px"
              height="30px"
            />
          </div>
        </div>
      </div>
    </div>
  )
};