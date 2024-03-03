import React from "react";
import githubLogo from "../img/logos/github.png";

const Header = () => {
  return (
    <header className="Header" id="Header">
      <h1>Darshan</h1>
      <h3>Web Designer & Developer</h3>
      <div className="mail">
        <a className="mail-link link" href="mailto:dj30c.1@gmail.com">
          dj30c.1@gmail.com
        </a>
      </div>
      <div className="social-logos">
        <a className="logo-link link" href="https://github.com/darshanjayadev">
          {/* https://github.com/logos */}
          <img src={githubLogo} alt="GitHub" />
        </a>
      </div>
    </header>
  );
};

export default Header;
