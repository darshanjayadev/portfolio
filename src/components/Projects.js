import React from 'react'
import capstoneFinal from '../img/microverse-capstone-final.png';
import weatherContext from '../img/microverse-weather-context.png';
import odinWeather from '../img/odin-weather.png';
import microverseXo from '../img/microverse-xo.png';
import themedRestaurant from '../img/microverse-themed-restaurant.png';


const Projects = () => {
  return (
    <section className="Projects">
      <header>
        <h2>
          Projects
        </h2>
      </header>
      <div className="projects-list">
        <article className="project">
          <div className="screenshot">
            <img src={capstoneFinal} alt="Alt" />
          </div>
          <header>
            <h4>Microverse Final Capstone Project</h4>
            <div className="project-links">
              <a className="link" href="https://microverse-capstone-final.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className="link" href="https://github.com/juzQrios/Microverse-final-capstone-project" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </header>
        </article>

        <article className="project">
          <div className="screenshot">
            <img src={themedRestaurant} alt="Alt" />
          </div>
          <header>
            <h4>React app with theme switching</h4>
            <div className="project-links">
              <a className="link" href="https://microverse-themed-restaurant.netlify.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className="link" href="https://github.com/juzQrios/odin-restaurant-react" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </header>
        </article>

        <article className="project">
          <div className="screenshot">
            <img src={microverseXo} alt="Alt" />
          </div>
          <header>
            <h4>Tic-Tac-Toe collab clone</h4>
            <div className="project-links">
              <a className="link" href="https://microverse-xo.netlify.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className="link" href="https://github.com/juzQrios/tic-tac-toe/tree/customize-style" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </header>
        </article>

        <article className="project">
          <div className="screenshot">
            <img src={odinWeather} alt="Alt" />
          </div>
          <header>
            <h4>Vanilla JS implementation of Odin Weather App</h4>
            <div className="project-links">
              <a className="link" href="https://raw.githack.com/juzQrios/odin-weather-app/master/dist/index.html" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className="link" href="https://github.com/juzQrios/odin-weather-app/tree/development" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </header>
        </article>

        <article className="project">
          <div className="screenshot">
            <img src={weatherContext} alt="Alt" />
          </div>
          <header>
            <h4>React implementation of Odin Weather App</h4>
            <div className="project-links">
              <a className="link" href="https://microverse-weather-context.netlify.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a className="link" href="https://github.com/juzQrios/odin-weather-app/tree/react-dev" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </header>
        </article>
      </div>
    </section>
  );
}

export default Projects;
