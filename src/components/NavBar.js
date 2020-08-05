import React from 'react';
import '../stylesheets/NavBar.css';

function NavBar() {
  return (
    <div className="navwrapper">
      <ul className="nav">
        <li className="navlist">
          <img className="img" alt="me" src={ require('../img/logo4.png') } />
        </li>
        {/* <li className="navlist"><span>About me</span></li>
        <li className="navlist"><span>Project</span></li>
        <li className="navlist"><span>Contact</span></li> */}
      </ul>
    </div>
  );
}

export default NavBar;
