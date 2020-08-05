import React from 'react';
import './stylesheets/App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="container">
        {/* <NavBar /> */}
        <img className="background" alt="me" src={ require('./img/meandlake.jpg') } />
        <div className="title">
          <p>Arisa Okuyama</p>
          <h6>Junior Web Developer</h6>
        </div>
      </div>
      <div className="aboutme">
        <h3>about me</h3>
      </div>
    </>
  );
}

export default App;
