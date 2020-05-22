import React from "react";
import Image from "../../img/headerfood.jpg";

const Header = () => {
  return (
    <div className="header--container">
      <div className="header--text__container">
        <h1 className="h1-text">The finest super food snack</h1>
        <p className="aside-text">
          This minimalist and eclectric composed of several recycled, raw and
          reworked elements invites from scratch to share a passion of cooking
        </p>

        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your address"
            className="input"
          />
          <button className="btn-header">
            <div className="btn-content">
            Get started <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </button>
        </div>
      </div>
      <div className="header-image__container">
        <img src={Image} alt="" width="600px" />
      </div>
    </div>
  );
};

export default Header;
