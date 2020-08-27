import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands';

const Project = (props) => {
    return (
        <>
            <div className="project1">
                <h2>{props.projectName}</h2>
                <p>{props.projectDescription}</p>
                <div className="stackwrapper">
                    <div className="teckstack">
                        <span>HTML</span><span>|</span><span>CSS</span><span>{props.stacks && '|'}</span><span>{props.stacks && props.stacks[0]}</span><span>{props.stacks && '|'}</span>
                    </div>
                    <div className="teckstack">
                        <span>{props.stacks && props.stacks[1]}</span><span>{props.stacks && '|'}</span><span>{props.stacks && props.stacks[2]}</span><span>{props.stacks && '|'}</span><span>{props.stacks && props.stacks[3]}</span>
                    </div>
                </div>
                <div className="projectimage border">
                    <div className="link-wrapper">
                        <a href={props.repoUrl} className="project-link">
                            <h5>CODE<FontAwesomeIcon icon={faGithub} size="2x" /></h5>
                        </a>
                        <a href={props.webUrl} className="project-link">
                            <h5>VISIT WEBSITE</h5>
                        </a>
                    </div>
                    <img alt="me" src={props.imageUrl} />
                </div>
            </div>
        </>

    )

}

export default Project;