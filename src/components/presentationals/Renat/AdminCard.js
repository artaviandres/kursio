import React from 'react';
import { Link } from "react-router-dom";
import Title from '../Title';

export default function AdminCard({ img, title, linkTo }) {
  return (
    <Link to={linkTo} className="admin-card-container">
      <img src={img} />
      <Title fontSize="42px">{title}</Title>
    </Link>
  );
};