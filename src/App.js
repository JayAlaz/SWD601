import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import logo from "./assets/logo.jpeg";
import Events from "./components/events";
import Home from "./components/home";
import Enrolled from "./components/enrolled";
import Contactus from "./components/contact_us";
import "./components/body.css";
import "./components/header.css";

function App() {
  // mobile view - hamburger menu.
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navChoice, setNavChoice] = useState('home');
  const callHome = () => setNavChoice('home');
  const callEvents = () => setNavChoice('events');
  const callEnv = () => setNavChoice('favorite');
  const callContactUs = () => setNavChoice('contact');
  
  return (
    <div className="Container">
      {/*~ The navigation is mobile responsive.*/}
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href="/#">
                <img className="logoStyle" src={logo} alt="" />
              </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callHome}>Home</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callEvents}>Events</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callEnv}>Enrolled Events</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href="/#" className="fontEdit" onClick={callContactUs}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>

        <div className="body-container">
        { 
          {
              'home': <Home className="body-container" />,
              'events': <Events className="body-container" />,
              'favorite': <Enrolled className="body-container" />,
              'contact': <Contactus className="body-container" />
          }[navChoice]
        }
        </div>
    </div>
  );
}

export default App;
