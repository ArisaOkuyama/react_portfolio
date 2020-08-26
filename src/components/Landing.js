import React, { useContext } from 'react';
import '../stylesheets/Landing.css';
import StateContext from '../store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
            <p className="japa" onClick={ onClick }>{store.language ? "日本語" : "ENGLISH"}</p>
            <img idName="background-img" alt="me" src={ require('../img/meandlake.jpg') } />
            <div className="title">
                <p>Arisa Okuyama</p>
                <p style={{borderBottom: "0px solid white",fontSize: "7vw"}}>{store.language ? false : "奥山有彩"}</p>
                <h6>{store.language ? "Junior Web Developer" : "プログラマー"}</h6>
            </div>
            <div className="navwrapper">
                <div className="navmenu">
                    <div className="navcontroller" onClick={togglebtn}>
                        {/* <div  > */}
                            <FontAwesomeIcon className="navopenbtn" icon={faBars} size="2x" style={{color: 'gray'}}/>
                        {/* </div> */}
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