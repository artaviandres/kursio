import React from 'react';
import '../../styles/not-found.scss';
import Header from '../presentationals/Header';
import { Link } from "react-router-dom";

//img
import BeforeDawn from '../../assets/img/before-dawn.svg';
import Title from '../presentationals/Title';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <Header />
      <div className="not-found-wrapper">
        <img src={BeforeDawn} />
        <div className="not-found-text">
          <Title fontSize="42px">Page Not Found</Title>
          <p>We couldn't find the page you're looking for</p>
          <Link to="/"><a>Return to Home</a></Link>      
        </div>
      </div>
    </div>
  )
};