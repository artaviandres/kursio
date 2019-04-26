import React from 'react';
import '../../styles/order-item.scss';

export default function OrderItem({ id, date, status, image, categories, course }) {
  return (
    <div className="stm-lms-user-order">
      <h4 className="title">Order ID: {id}</h4>
      <div className="status">{date}</div>
      <div className="status pending">{status}</div>
      <div className="advanced">
        <table>
          <tbody>
            <tr>
              <td className="image">
                <img style={{ width: "300", height: "225" }} src={image} className="attachment-img-300-225 size-img-300-225 wp-post-image" alt="" />
              </td>
              <td className="name"><span>{categories} &gt;</span>
                <a href={course.url}>{course.title}</a>
              </td>
              <td className="price">Price<strong>${course.price}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};