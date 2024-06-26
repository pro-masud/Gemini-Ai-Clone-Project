import React, { useContext } from 'react'
import "./Main.css";
import { assets } from '../../assets/assets';
import { Context } from '../../contents/content';

const Main = () => {
  const { prevPrompts, setPrevPrompts, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context)
  return (
    <>
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src="https://dev-masud-rana.netlify.app/image/user.png" alt="user-image" />
        </div>
        <div className="main-container">
          {
            !showResult ?
            <>
            <div className="great">
              <p><span>Hello, Masud.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="compass" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="compass" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="compass" />
              </div>
              <div className="card">
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="compass" />
              </div>
            </div>
            </>
            : <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-showing">
                <div className="gemini-icon">
                  <img src={assets.gemini_icon} alt="" />
                </div>
               <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
            </div>
        }
          
          <div className="main-botton">
            <div className="searching-btn">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="search" placeholder='Enter Your Question?' />
              <div className="s-btn-images">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
