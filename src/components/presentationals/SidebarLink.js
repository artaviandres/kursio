import React from 'react';
import Tooltip from './Tooltip';

export default function SidebarLink({ icon, tooltip, tooltipId }) {
  return (
    <a data-tip data-for={tooltipId} className="sidebar-link animation-hover">
      {icon}
      <Tooltip id={tooltipId} type="dark" place="right">
        {tooltip}
      </Tooltip>
    </a>
  )
}