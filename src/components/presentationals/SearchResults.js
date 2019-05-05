import React from 'react';
import Title from './Title';
import '../../styles/search-results.scss';

import ProfilePicture from '../../assets/img/profilepicture.jpg';

export default function SearchResults() {
  return (
    <div className="search-results-container">
      <Title fontSize="24px">Top find</Title>
      <div className="search-results-top-find">
        <img src={ProfilePicture} />
        <div className="top-find-info">
          <h6>Andrés Artavia</h6>
          <p>Software Engineer</p>
        </div>
      </div>
      <Title fontSize="24px" margin="40px 0 15px 0">Courses (176)</Title>
      <div className="search-list">
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
        <p><span>Angular JS Basics, Routing and rendering</span>, by Jane Doe. ($80)</p>
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
        <p><span>React Basics</span>, by Andrés Artavia. ($56)</p>
      </div>
      <Title fontSize="24px">Teachers (25)</Title>
      <div className="search-list">
        <p><span>Andrés Artavia</span>, Software Engineer</p>
        <p><span>Jane Doe</span>, Entrepeneur</p>
        <p><span>Andrés Artavia</span>, Photographer</p>
        <p><span>Jane Doe</span>, Graphic Designer</p>
        <p><span>Andrés Artavia</span>, Artist</p>
      </div>
    </div>
  );
};