import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            sint nemo veniam laborum cupiditate architecto itaque nulla
            praesentium nostrum temporibus, odit debitis repellat doloribus
            distinctio minus saepe assumenda pariatur beatae!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li> Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8445540485</li>
                <li>ashishyadav@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copright">
            Copyright 2024 $ Tomato.com-All right reserved 
      </p>
    </div>
  );
};

export default Footer;
