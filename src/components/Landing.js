import React, { useContext } from 'react';
import '../stylesheets/Landing.css';
import StateContext from '../store'

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
            <p style={{borderBottom: "0px solid white"}}>{store.language ? false : "奥山有彩"}</p>
            <h6>{store.language ? "Junior Web Developer" : "プログラマー"}</h6>
            </div>
            <div className="navwrapper">
                <div className="navmenu">
                    <div className="navcontroller" onClick={togglebtn}>
                        <div className="navopenbtn">OPEN</div>
                        <div className="navclosebtn">CLOSE</div>
                    </div>
                    <div className="navbtn">
                        <p>ABOUT</p>
                    </div>
                    <div className="navbtn">
                        <p>WORK</p>
                    </div>
                    <div className="navbtn">
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Landing;