import React, { useContext } from 'react';
import '../stylesheets/Contact.css';
import StateContext from '../store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/fontawesome-free-brands';

const Contact = () => {
    return(
        <>  
            <div className="contact-wrapper" id="contact">
                <h2 className="contact-title">CONTACT ME</h2>
                <p>I am currently looking for full-time employment.</p>
                <p>Feel free to reach out to me via email or links below.<br></br><br></br>
                arisaokuyama@gmail.com</p>
                <div className="contact-links">
                    <div className="linkedin">
                        <a href='https://www.linkedin.com/in/arisaokuyama/'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                    <div className="twitter">
                        <a href='https://twitter.com/ArisaOkuyama'>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </div>
                <hr className="accessory"></hr>
            </div>
        </>
    )
}

export default Contact;