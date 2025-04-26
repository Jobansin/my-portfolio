import "./ProjectsStyles.css";
import React from "react";
import { FaGithub} from "react-icons/fa";

function Projects() {
return (
    <div id="list">
        <h1>Projects</h1>
        <div id="box">
            <div className="project-card">
                <img id="ruliving" className="proj" src="kinsubii.png" />
                    <div className="description">
                        <p className="title">Date Knight</p>
                        <p>Date Knight landing page for the startup Kinsubii</p>
                        <a href="https://github.com/Jobansin/date_knight"><FaGithub size="4em"/></a>
                    </div>
                </div>
        <div className="project-card">
            <img id="ruliving" className="proj" src="ruliving.png" />
                <div className="description">
                    <p className="title">RU Living</p>
                    <p>Helps Rutgers students find optimal dorm and roommate matches</p>
                    <a href="https://github.com/Jobansin/RU_Living"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="marketiq.png"></img>
                <div className="description">
                    <p className="title">MarketIQ AI</p>
                    <p>Stock analysis web app with real-time data and ML-ready backend</p>
                    <a href="https://github.com/Jobansin/marketiq-ai"><FaGithub size="4em"/></a>
                </div>
            </div>
        </div>
    </div>
);
}

export default Projects;