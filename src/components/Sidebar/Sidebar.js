import "./sidebar.css";
import NavLink from "./NavLink";

import React, { useState } from 'react';

const Sidebar = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <div className={`sidebar ${menuToggle ? "open" : ""}`}>
      <div className="logo-details">
        <img src="logo.svg" alt=""/>
        <div className="logo_name">Hockey Trax</div>
        <i className='bx bx-menu' id="btn" onClick={() => setMenuToggle(!menuToggle)}></i>
      </div>
      <ul className="nav-list">
        <NavLink link="/" icon="bx-home" name="Home"/>
        <NavLink link="/games" icon="bxs-flag-checkered" name="Games"/>
        <NavLink link="/skaters" icon="bx-walk" name="Skaters"/>
        <NavLink link="/goalies" icon="bx-shield-x" name="Goalies"/>
        <NavLink link="/lines" icon="bx-group" name="Lines"/>
        <NavLink link="/teams" icon="bxs-t-shirt" name="Teams"/>
        <NavLink link="/settings" icon="bx-cog" name="Settings"/>
      </ul>
    </div>
  ) 
};

export default Sidebar;

/* 
  Profile Section (unsure if login will be necessary)
        <li className="profile">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">Christian Traxler</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out" ></i>
        </li>
*/