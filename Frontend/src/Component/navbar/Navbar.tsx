import React from 'react';
import './Navbar.css'
import logo from '../../../public/Images/logo.png';

const Navbar = () => {
    return (
        <div>
              <div className="help-center">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            
            <span><img src={logo} alt="" className="image"/>Abstract | Help Center</span>
          </div>
          <button className="submit-request">Submit a request</button>
        </div>
      </header>
      

        </div>
        </div>
    )
};

export default Navbar;