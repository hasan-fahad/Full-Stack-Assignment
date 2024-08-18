import React from 'react';
import './Footer.css'
import logo from '../../../public/Images/logo.png';



const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Abstract</h2>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Community</h2>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Company</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
           
            <ul>
              <img src={logo} alt="" />
              <li>© Copyright 2022 <br /> Abstract Studio Design, Inc. <br />All rights reserved</li>
              
            </ul>
          </div>
        </div>
        
      </footer>
    );
};

export default Footer;