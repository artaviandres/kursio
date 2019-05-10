import React from 'react';
import { Link } from "react-router-dom";
import { FiYoutube, FiMessageSquare, FiTrendingUp, FiHelpCircle, FiBookOpen, FiLogOut } from 'react-icons/fi';
import Tooltip from './Tooltip';
import SidebarLink from './SidebarLink';

import '../../styles/sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <Link to="/">
          <h1 data-tip data-for="home">K</h1>
        </Link>
        <Tooltip id="home" type="dark" place="right">
          Go To Home
        </Tooltip>
      </div>
      <div className="sidebar-links">
        <SidebarLink tooltip="Courses" tooltipId="courses" icon={<FiYoutube size={35} />} />
        <SidebarLink tooltip="Communication" tooltipId="communication" icon={<FiMessageSquare size={35} />} />
        <SidebarLink tooltip="Analytics" tooltipId="analytics" icon={<FiTrendingUp size={35} />} />
        <SidebarLink tooltip="Help" tooltipId="help" icon={<FiHelpCircle size={35} />} />
        <SidebarLink tooltip="Switch to Student View" tooltipId="student" icon={<FiBookOpen size={35} />} />
        <SidebarLink tooltip="Log Out" tooltipId="logout" icon={<FiLogOut size={35} />} />
      </div>
    </div>
  )
};