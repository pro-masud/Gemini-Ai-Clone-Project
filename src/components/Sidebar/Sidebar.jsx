import React, { useState } from 'react';
import "./Sidebar.css";
import { assets } from '../../assets/assets';

const Sidebar = () => {
    const [extented, setExtented] = useState(false);

  return (
    <div className='sidebar'>
      <div className="sidebar-top">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" onClick={() => setExtented(prev => !prev)} />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="new chat icon" />
            { extented ? <p>New Chat</p> : null }
        </div>
        { extented ?
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
        : null
        }
        
      </div>
      <div className="sidebar-bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extented ? <p>Help</p> : null}
            
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
