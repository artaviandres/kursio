import React from 'react';
import '../../styles/social-media-icon.scss';

export default function SocialMediaIcon({ icon, backgroundColor, margin, link, width, height }) {
  return (
    <a
      className="social-media-icon-container"
      style={{ backgroundColor, margin, width, height }}
      href={link}
      target="_blank"
    >
      {icon}
    </a>
  )
};