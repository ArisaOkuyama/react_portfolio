import React, { useContext } from "react";
import "../stylesheets/Contact.css";
import StateContext from "../store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/fontawesome-free-brands";

const Contact = () => {
    const { store, dispatch } = useContext(StateContext);
  return (
    <>
      <div className="contact-wrapper" id="contact">
        <div className="contact-deco"></div>
        <h2 className="contact-title">CONTACT ME</h2>
        <div className="contact-flex">
          <div>
            <p className="contact-dis">
                {store.language ? "I am currently looking for full-time employment." : "現在プログラマーとしての仕事を探しております。"}
            </p>
            <p className="contact-dis">
            {store.language ? "Feel free to reach out to me via email or links below." : "SNSやメールを通じて軽くお話できれば光栄です。"}<br></br>
              <br></br>
            </p>
            <p className="email">arisaokuyama@gmail.com</p>
          </div>
          <div className="contact-links">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/arisaokuyama/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <div className="twitter">
              <a href="https://twitter.com/ArisaOkuyama">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
        {/* <hr className="accessory"></hr> */}
      </div>
    </>
  );
};

export default Contact;
