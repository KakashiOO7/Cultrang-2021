import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./home-mobile.css";
import cultrangLogo from "./cultrang-logo.png";
import clouds from "./home-cloud.svg";

const Home = () => {
  return (
    <div id="home">
      <div className="home-container">
        <Menu pageWrapId="page-wrap">
          <a href="#home" className="menu-item">
            HOME
          </a>
          <a href="#about" className="menu-item">
            ABOUT US
          </a>
          <a href="#events" className="menu-item">
            EVENTS
          </a>
          <a href="#proevents" className="menu-item">
            PRO EVENTS
          </a>
          <a href="#sponsor" className="menu-item">
            SPONSOR
          </a>
          <a href="#contact" className="menu-item">
            CONTACT US
          </a>
          <a href="https://drive.google.com/u/0/uc?id=1ehuudTD-AaFSG7fwus6KbbC_7xtOdU-c&export=download">
            RULEBOOK
          </a>
        </Menu>
      </div>
      <div id="page-wrap">
        {
          <div className="cloud-container">
            <img className="clouds-home" src={clouds} alt="clouds"></img>
          </div>
        }
        <div className="title-container">
          <img src={cultrangLogo} className="cultrang-title" />
        </div>
        {/* <div className='cloud1'></div>
							<div className='cloud2'></div> */}
        <div className="bottom">
          <div className="taj"></div>
          <div className="plane1"></div>
          <div className="eiffel-tower"></div>
          <div className="fairywheel"></div>
          <div className="baloon1"></div>
          <div className="baloon2"></div>
          <div className="plane2"></div>
          <div className="moon"></div>
        </div>
        <div className="blank-space"></div>
      </div>
    </div>
  );
};

export default Home;
