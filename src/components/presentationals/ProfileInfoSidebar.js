import React from 'react';
import { Col } from 'react-flexbox-grid';
import { Rating } from 'semantic-ui-react';
import { FaCog, FaBullhorn, FaCertificate } from "react-icons/fa";
import ProfilePicture from '../presentationals/ProfilePicture';
import Text from '../presentationals/Text';
import Button from '../presentationals/Button';
import '../../styles/user-profile.scss';
import '../../styles/button.scss';
import '../../styles/layout.scss';
import '../../styles/icons.scss';

export default function ProfileInfoSidebar({ rating, profile }) {
  return (
    <Col md={3} xs={12} className="profile-personal-info">
      <ProfilePicture img={profile.UserPicture} size="big" />
      <Text size="24px" type="bold" margin="30px 0 10px 0">{profile.name}</Text>
      <Text size="16px" type="light" margin="0 0 15px 0 ">{profile.ocupation}</Text>
      <div className="profile-rating">
        <Rating icon='star' defaultRating={rating.rating} maxRating={5} disabled size='large' />
        <Text size="14px" type="bold" margin="0 0 0 10px">{rating.rating} / 5</Text>
      </div>
      {!profile.isTeacherProfile ?
        <div>
          <Text size="13px" type="light" margin="5px 0 0 0" color="#ccc">{rating.rating} Reviews</Text>
          <Button classList="button-secondary-color margin-top-short margin-bottom-short" color="#fff" text="My Messages" />
          <a href="#" className="margin-bottom-short"><Text size="13px" type="light" margin="5px 0 0 0" color="#ccc"><FaBullhorn className="icon-text-right" size="18" />Create Announcement</Text></a>
          <a href="#" className="margin-bottom-short"><Text size="13px" type="light" margin="5px 0 0 0" color="#ccc"><FaCertificate className="icon-text-right" size="18" />My certificates</Text></a>
          <a href="#" className="margin-bottom-short"><Text size="13px" type="light" margin="5px 0 0 0" color="#ccc"><FaCog className="icon-text-right" size="18" />Edit profile</Text></a>
        </div>
        : null}
    </Col>
  );
};