import React from 'react';
import '../../styles/profile-picture.scss';

export default function ProfilePicture({ img, size }) {
  return (
    <img className={`profile-picture ${size}`} style={{ backgroundImage: `url(${img})` }} />
  );
};