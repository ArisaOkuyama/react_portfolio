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
            <div className="aboutme-wrapper" id="aboutme">
                {/* <p className="button-name">{store.language ? "JP": "ENGLISH"}</p> */}
                <div className="aboutme-header">
                    <div className="button" onClick={ onClick }></div>
                    <div className="button2" onClick={ onClick }></div>
                    <h2>{store.language ? "ABOUT ME" : "自己紹介"}</h2>
                    <div className="image-deco">
                        <div className="deco"></div>
                        <img className="profile-photo" alt="me" src="https://media-exp1.licdn.com/dms/image/C4D03AQGR51TVKQnN5w/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=7AEyV5GR9UFsnzMT8fT3U1hd_ru2H2PMNluygzzLtzs" />
                    </div>
                </div>
                <div className="aboutme-body">
                    <div className="profile-1">
                        <h5>MY NAME IS ARISA.</h5>
                        <p>My passion is the technology and the sustainable environment/energy . I love to be working towards making the world more sustainable environment by the technology that I helped to build.
                            I believe technology makes the world a better place. As technology grows, we can make reduce the footprint.
                        </p>
                        <p>I am also like the challenges and work towards the goal.</p>
                    </div>
                    <div className="profile-1">
                        <div className="profilesection">
                            <h5>RESUME</h5>
                            {/* <p>ENGLISH | JAPANESE</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AboutMe;

 