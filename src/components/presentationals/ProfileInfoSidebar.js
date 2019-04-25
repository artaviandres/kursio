import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Rating } from 'semantic-ui-react';
import { FaCog, FaBullhorn, FaCertificate } from "react-icons/fa";
import ProfilePicture from '../presentationals/ProfilePicture';
import Text from '../presentationals/Text';
import Button from '../presentationals/Button';
import '../../styles/profile-info-sidebar.scss';
import '../../styles/button.scss';
import '../../styles/layout.scss';
import '../../styles/icons.scss';
import { STYLES } from '../../const';

export default function ProfileInfoSidebar({ rating, profile }) {
  return (
    <Col md={3} xs={12} className="personal-info">
      <ProfilePicture img={profile.UserPicture} size="big" />
      <Text size="24px" type="bold" margin="30px 0 10px 0">{profile.name}</Text>
      <Text size="16px" type="light" margin="0 0 15px 0 ">{profile.ocupation}</Text>
      <div className="profile-rating">
        <Rating icon='star' defaultRating={rating.rating} maxRating={5} disabled size='large' />
        <Text size="14px" type="bold" margin="0 0 0 10px">{rating.rating} / 5</Text>
      </div>
      {!profile.isTeacherProfile ?
        <div className="personal-info-cta-container">
          <Text size="13px" type="light" margin="5px 0 0 0" color={STYLES["$footer-top-border"]}>{rating.rating} Reviews</Text>
          <Button classList="button-secondary-color margin-top-short margin-bottom-short" color={STYLES["$white"]} text="My Messages" />
          <a href="#" className="personal-info-link">
            <FaBullhorn className="icon-text-right" size="18" />
            <Text size="13px" type="light">Create Announcement</Text>
          </a>
          <a href="#" className="personal-info-link">
            <FaCertificate className="icon-text-right" size="18" />
            <Text size="13px" type="light">My certificates</Text>
          </a>
          <a href="#" className="personal-info-link">
            <FaCog className="icon-text-right" size="18" />
            <Text size="13px" type="light">Edit profile</Text>
          </a>
        </div>
        : null}
    </Col>
  );
};