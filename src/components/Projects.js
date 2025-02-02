import React, { useContext } from "react";
import "../stylesheets/Projects.css";
import StateContext from "../store";
import Project from "./nestedcomponents/Project";

const Projects = () => {
  const { store } = useContext(StateContext);
  const ecoA = ["Node.js", "Express", "MongoDB", "React"];
  const farmers = ["Ruby on Rails", "PostgreSQL", "Bootstrap"];
  return (
    <>
      <div className="projectwrapper" id="project">
        <div className="project-header">
          <h2>{store.language ? "PROJECTS" : "プロジェクト"}</h2>
        </div>
        <div className="project-body">
          <Project
            projectName={
              store.language ? "REACT PORTFOLIO" : "ポートフォリオ"
            }
            projectDescription="Latest portfolio that I made with React."
            repoUrl="https://github.com/ArisaOkuyama/react_portfolio"
            webUrl="https://arisaokuyama.herokuapp.com/"
            imageUrl={require("../img/portfolio.png")}
          />
          <hr className="accessory"></hr>
          <Project
            projectName={
              store.language ? "FIRST PORTFOLIO" : "旧ポートフォリオ"
            }
            projectDescription="It is static page of my first portfolio that I made a part of Coder Academy assignment."
            repoUrl="https://github.com/ArisaOkuyama/aboutme"
            webUrl="https://arisaokuyama.github.io/aboutme/"
            imageUrl={require("../img/firstportfolio.png")}
          />
          <hr className="accessory"></hr>
          <Project
            projectName="EcoA"
            projectDescription="EcoA is a recipe platform for zero waste products in order to introduce the way we can reduce the waste and the footprint from home. It also cut down the unnecessary packaging by making the products from raw ingredients."
            repoUrl="https://github.com/T3A2MERNStack"
            imageUrl={require("../img/ecoanew.png")}
            stacks={ecoA}
            webUrl="https://ecoa.space/"
          />
          <hr className="accessory"></hr>
          <Project
            projectName={
              store.language
                ? "ONLINE FARMERS MARKET"
                : "ファーマーズマーケット"
            }
            projectDescription="Seico mart is the online farmers market where the farmer can meet the consumer. The consumers are able to buy local quality produces directly from the farmers. It benefits for both farmers and consumers."
            repoUrl="https://github.com/ArisaOkuyama/farmers_market"
            webUrl="https://arcane-tor-43519.herokuapp.com/"
            stacks={farmers}
            imageUrl={require("../img/marketplace.png")}
          />
          <hr className="accessory"></hr>
        </div>
      </div>
    </>
  );
};

export default Projects;
