import React from 'react';
import ReactTooltip from 'react-tooltip';
import '../../styles/tooltip.scss';

export default function Tooltip({ id, type, place, children }) {
  return (
    <ReactTooltip id={id} type={type} place={place}>
      <span className="tooltip-text">{children}</span>
    </ReactTooltip>
  )
}