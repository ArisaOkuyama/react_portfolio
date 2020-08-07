import React, { useContext } from 'react';
import '../stylesheets/Projects.css';
import StateContext from '../store'


const Projects = () => {
    const { store, dispatch } = useContext(StateContext)
    return (
        <>
            <div className="projectwrapper">
                <div className="project-header">
                    <h2>{store.language ? "PROJECTS" : "プロジェクト"}</h2>
                </div>
                <div className="project-body">
                    <div className="project1">
                        <h3>{store.language ? "FARMERS MARKET" : "ファーマーズマーケット"}</h3>
                        <p>This application is to connect the farmer and the consumer together.</p>
                        <span>Technology Stack</span>
                        <span>Ruby on Rails, PostgreSQL,HTML, CSS</span>
                        <img alt="me" src={ require('../img/ecoa.png') } />
                    </div>
                    <div className="project2">
                        <img alt="me" src={ require('../img/marketplace.png') } />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects;

 