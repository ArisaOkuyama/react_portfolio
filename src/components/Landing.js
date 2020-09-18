import React, { useContext } from 'react';
import '../stylesheets/Landing.css';
import StateContext from '../store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Ball from './Ball'

const Landing = () => {

    function togglebtn(){
        document.getElementsByClassName("navmenu")[0].classList.toggle("active")
    }

    const { store, dispatch } = useContext(StateContext)  

    function onClick() {
        if(store.language){
            dispatch({type: "setLanguage", data: false })
        } else {
            dispatch({type: "setLanguage", data: true })
        } 
    }  

    return (
    <>
        <div className="container">
            <p className="japa" onClick={ onClick }>{store.language ? "JAPANESE" : "ENGLISH"}</p>
            <img id="background-img" alt="me" src={ require('../img/meandlake.jpg') } />
            <Ball left='88' bottom='24' color="rgb(240, 235, 165, 0.6)" height='1' width='1'/>
            <Ball left='35' bottom='28' color="rgb(242, 243, 211, 0.6)"/>
            <Ball left='55' bottom='5'  color="rgb(207, 228, 193, 0.6)"/>
            <Ball left='72' bottom='36' color="rgb(206, 228, 226,0.8)" />
            <Ball left='20' bottom='15' color="rgb(243, 202, 184, 0.6)" height='1.2' width='1.2' />
            <Ball left='10' bottom='45' color="rgb(197, 210, 235, 0.6)" />
            <Ball left='80' bottom='49' color="rgb(207, 228, 193, 0.6)" height='1.2' width='1.2'/>
            {/* <Ball left='65' bottom='26' color="rgb(222,93,131,0.3)" height='0.5' width='0.5'/> */}
            <div className="title">
                <p>Arisa Okuyama</p>
                <h6>{store.language ? "Full-Stack Developer" : "プログラマー"}</h6>
            </div>
            <div className="navwrapper">
                <div className="navmenu">
                    <div className="navcontroller" onClick={togglebtn}>
                            <FontAwesomeIcon className="navopenbtn" icon={faBars} size="1x" style={{color: '#c6c6c6'}}/>
                        <div className="navclosebtn">＞＞</div>
                    </div>
                    
                    <div className="navbtn">
                        <a href="#aboutme"><p>ABOUT ME</p></a>
                    </div>
                    
                    <div className="navbtn">
                        <a href="#project"><p>PROJECTS</p></a>
                    </div>
                    <div className="navbtn">
                    <a href="#contact"><p>CONTACT</p></a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Landing;