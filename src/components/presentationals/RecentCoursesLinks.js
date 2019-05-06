import React from 'react';
import '../../styles/recent-courses-links.scss';

export default function RecentCoursesLinks({ selectedRecentCourseCategory, setSelectedRecentCourseCategory }) {
  const categories = ["Business", "Music", "Technology", "Cooking", "Parenthood", "Art", "Do It Yourself", "Languages"];
  return (
    <div className="recent-courses-links-container">
      {categories.map((category, index) => (
        <a
          key={index}
          className={index === selectedRecentCourseCategory ? 'selected-category' : null}
          onClick={() => setSelectedRecentCourseCategory(index)}
        >
          {category}
        </a>
      ))}
    </div>
  )
}