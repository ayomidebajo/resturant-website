import React from "react";
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar--container">
      <ul className="nav-links">
        <li>
          
           <a href="#" className="logo">
           Sweet Munch
           </a>
       
        </li>
        <li>
          <a href="#" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Packages
          </a>
        </li>
        <li>
          <a href="#" className="link">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Contact us
          </a>
        </li>
        <li>
          <button className="btn-nav">Get started</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
