import NavLink from "./NavLink";
import { store } from "../../functions/store";
import React, { useContext } from 'react';

const Sidebar = () => {
  const { state, dispatch } = useContext(store);

  return (
    <div className={`sidebar ${state.menuToggle ? "open" : ""}`}>
      <div className="logo-details">
        <div className="logo_name">Hockey Traxce</div>
        <i className='bx bx-menu' id="btn" onClick={() => dispatch({ type: 'TOGGLE_MENU' })}></i>
      </div>
      <ul className="nav-list">
        <NavLink link="/" icon="bx-home" name="Home"/>
        <NavLink link="/games" icon="bxs-flag-checkered" name="Games"/>
        <NavLink link="/skaters" icon="bx-walk" name="Skaters"/>
        <NavLink link="/goalies" icon="bx-shield-x" name="Goalies"/>
        <NavLink link="/teams" icon="bxs-t-shirt" name="Teams"/>
      </ul>
    </div>
  ) 
};

export default Sidebar;

/* 
        <img src="logo.svg" alt=""/> 
*/

/*
        <NavLink link="/lines" icon="bx-group" name="Lines"/>
        <NavLink link="/settings" icon="bx-cog" name="Settings"/>
 */

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