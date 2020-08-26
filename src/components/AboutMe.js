import React, { useContext } from 'react';
import '../stylesheets/AboutMe.css';
import StateContext from '../store'

const AboutMe = () => {
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
            <div className="aboutme-wrapper">
                {/* <p className="button-name">{store.language ? "JP": "ENGLISH"}</p> */}
                <div className="aboutme-header">
                    <div className="button" onClick={ onClick }></div>
                    <div className="button2" onClick={ onClick }></div>
                    <h2>{store.language ? "ABOUT ME" : "自己紹介"}</h2>
                    <div className="image-deco">
                        <div className="deco"></div>
                        <img className="profile-photo" alt="me" src={ require('../img/profilephoto.jpg') } />
                    </div>
                </div>
                <div className="aboutme-body">
                    <div className="profile-1">
                        <h5>MY NAME IS ARISA.</h5>
                        <p>My passion is to work towards making the world more sustainable environment.
                            My goal is to be working as a part of it. I believe technology makes the world a better place. As technology grows, we can make reduce the footprint.
                        </p>
                    </div>
                    <div className="profile-1">
                        <div className="profilesection">
                            <h5>RESUME LINK</h5>
                            <p>ENGLISH | JAPANESE</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutMe;

 