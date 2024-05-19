import React from 'react';
import "./Sidebar.css";
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="new chat icon" />
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className='recent-title'>Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>what is a react js?</p>
            </div>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>what is a react js?</p>
            </div>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>what is a react js?</p>
            </div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
