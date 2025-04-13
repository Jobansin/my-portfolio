import "./ProjectsStyles.css";
import React from "react";
import { FaGithub} from "react-icons/fa";

function Projects() {
return (
    <div id="list">
        <h1>Projects</h1>
        <div id="box">
            <div className="project-card">
                <img className="proj" src="marketiq.png"></img>
                <div className="description">
                    <p className="title">MarketIQ AI</p>
                    <p>Allows for a user to create and save tasks for easy organization</p>
                    <a href="https://github.com/Jobansin/marketiq-ai"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
                <img className="proj" src="ruliving.png"></img>
                <div className="description">
                    <p className="title">RU Living</p>
                    <p>Helps simplify dormitory selection for Rutgers students</p>
                    <a href="https://github.com/Jobansin/RU_Living"><FaGithub size="4em"/></a>
                </div>
            </div>
            <div className="project-card">
            <div className="project-images">
                <img src="rucafe1.png"></img>
                <img src="rucafe2.png"></img>
            </div>
                <div className="description">
                    <p className="title">RU Café</p>
                    <p>A fun short quiz game that uses the echo3D API to show interactive 3D results.</p>
                    <a href="https://github.com/Jobansin/RU_Cafe"><FaGithub size="4em"/></a>
                </div>
            </div>
        </div>
    </div>
);
}

export default Projects;