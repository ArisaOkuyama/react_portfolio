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
                        <h2>- EcoA</h2>
                        
                        <p>EcoA is a recipe platform for zero waste products to introduce the way we can reduce the waste and the footprint at home. It also helps to reduce packaging. MERN stack is used to build. </p>
                        {/* <h3>Technology Stack</h3><br></br> */}
                        <div className="stackwrapper">
                            <div className="teckstack">
                                <span>Node.js</span><span>|</span><span>Express</span><span>|</span><span>MongoDB</span><span>|</span>
                            </div>
                            <div className="teckstack">
                                <span>React</span><span>|</span><span>HTML</span><span>|</span><span>CSS</span>
                            </div>
                        </div>
                        <div className="projectimage border">
                            <div className="link-wrapper">
                                <a href="https://github.com/T3A2MERNStack" className="project-link">
                                    <span>GitHub LINK</span>
                                </a>
                                <a href="https://ecoa.netlify.app/" className="project-link">
                                    <span>VISIT WEBSITE</span>
                                </a>
                            </div>
                            <img alt="me" src={ require('../img/ecoanew.png') } />
                        </div>
                    </div>
                    <div className="project1">
                        <h2>{store.language ? "- ONLINE FARMERS MARKET" : "ファーマーズマーケット"}</h2>
                        <p>Seico mart is the online farmers market where the farmer can meet the consumer to be able to buy grocery locally and directly without any middle man. It has benefit for the both party.</p>
                        <div className="stackwrapper">
                            <div className="teckstack">
                                <span>Ruby on Rails</span><span>|</span><span>PostgreSQL</span><span>|</span>
                            </div>
                            <div className="teckstack">
                                <span>HTML</span><span>|</span><span>CSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="projectimage">
                        <div className="link-wrapper">
                            <a href="https://github.com/ArisaOkuyama/farmers_market" className="project-link">
                                <span>GitHub LINK</span>
                            </a>
                            <a href="https://arcane-tor-43519.herokuapp.com/" className="project-link">
                                <span>VISIT WEBSITE</span>
                            </a>
                        </div>
                        <img alt="me" src={ require('../img/marketplace.png') } />
                    </div>
                    <div className="project1">
                        <h2>{store.language ? "FIRST PORTFOLIO" : "旧ポートフォリオ"}</h2>
                        <p>It is static page of my first portfolio that I made a part of Coder Academy assignment.</p>
                        <div className="stackwrapper">
                            <div className="teckstack">
                                <span>HTML</span><span>|</span><span>CSS</span>
                            </div>
                        </div>
                    </div>
                    <div className="projectimage">
                        <div className="link-wrapper">
                            <a href="https://github.com/ArisaOkuyama/aboutme" className="project-link">
                                <span>GitHub LINK</span>
                            </a>
                            <a href="https://arisaokuyama.github.io/aboutme/" className="project-link">
                                <span>VISIT WEBSITE</span>
                            </a>
                        </div>
                        <img alt="me" src={ require('../img/firstportfolio.png') } />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects;

 