import "./HomeStyles.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
      <div id="info" style={{ position: 'relative', zIndex: 2 }}> 
          <h1>Joban Singh</h1>
          <div id="text">
              <h2>Software Engineer •</h2>
              <h2>CS & Econ Graduate</h2>
          </div>
          <p>I love blending code and caffeine ☕️</p>
          <img id="portrait" img src="me.jpg" alt="Headshot of Jobanpreet Singh"/>
          <div id="icons">
              <a href="https://github.com/Jobansin"><FaGithub size="4em"/></a>
              <a href="https://www.linkedin.com/in/jobanpreet-singh-ru/"><FaLinkedin size="4em"/></a>
              <a href="mailto:Jobanpreet.r.singh@gmail.com"><SiGmail size="4em"/></a>
          </div>
      </div>
  );
}
    export default Home;