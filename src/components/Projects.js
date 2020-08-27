import React, { useContext } from 'react';
import '../stylesheets/Projects.css';
import StateContext from '../store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Project from './nestedcomponents/Project'

const Projects = () => {
    const { store, dispatch } = useContext(StateContext)
    const ecoA = ["Node.js","Express","MongoDB","React"]
    const farmers = ["Ruby on Rails","PostgreSQL","Bootstrap"]
    // const portfolio = ["HTML","CSS"]
    return (
        <>
            <div className="projectwrapper" id="project">
                <div className="project-header">
                    <h2>{store.language ? "PROJECTS" : "プロジェクト"}</h2>
                </div>
                <div className="project-body">
                    <Project 
                    projectName='EcoA'
                    projectDescription='EcoA is a recipe platform for zero waste products to introduce the way we can reduce the waste and the footprint at home. <br></br>It also helps to reduce the packaging by making the products from row ingredients.'
                    repoUrl= 'https://github.com/T3A2MERNStack'
                    imageUrl= { require('../img/ecoanew.png') }
                    stacks = {ecoA}
                    />
                    <hr class="accessory"></hr>
                    <Project 
                    projectName={store.language ? "ONLINE FARMERS MARKET" : "ファーマーズマーケット"}
                    projectDescription='Seico mart is the online farmers market where the farmer can meet the consumer to be able to buy grocery locally and directly without any middle man. It has benefit for the both party.'
                    repoUrl= 'https://github.com/ArisaOkuyama/farmers_market'
                    webUrl="https://arcane-tor-43519.herokuapp.com/"
                    stacks = {farmers}
                    imageUrl= { require('../img/marketplace.png') }
                    />
                    <hr class="accessory"></hr>

                    <Project 
                    projectName={store.language ? "FIRST PORTFOLIO" : "旧ポートフォリオ"}
                    projectDescription='It is static page of my first portfolio that I made a part of Coder Academy assignment.'
                    repoUrl= 'https://github.com/ArisaOkuyama/aboutme'
                    webUrl="https://arisaokuyama.github.io/aboutme/"
                    // stacks = null
                    imageUrl= { require('../img/firstportfolio.png') } 
                    />
                    <hr class="accessory"></hr>
                </div>
            </div>
        </>
    )
}


export default Projects;

 