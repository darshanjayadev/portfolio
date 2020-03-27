import React from 'react'
import githubLogo from '../img/logos/github.png'
import twitterLogo from '../img/logos/twitter.png'

const Header = () => {
  return (
    <header className="Header" id="Header">
      <h1>Darshan</h1>
      <h3>Web Designer & Developer</h3>
      <div className="mail">
        <a className="mail-link" href="mailto:dj30c.1@gmail.com">dj30c.1@gmail.com</a>
      </div>
      <div className="social-logos">
      <a className="logo-link" href="https://github.com/juzQrios">
        {/* https://github.com/logos */}
        <img src={githubLogo} alt="GitHub" />
      </a>
      <a className="logo-link" href="https://twitter.com/DarshanJayadev">
        {/* https://about.twitter.com/en_us/company/brand-resources.html */}
        <img src={twitterLogo} alt="Twitter" />
      </a>
      </div>
    </header>
  );
}

export default Header;
