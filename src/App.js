import React, { useReducer } from "react";
import "./stylesheets/App.css";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import stateReducer from "./stateReducer";
import StateContext from "./store";
import Contact from "./components/Contact";

function App() {
  const [store, dispatch] = useReducer(stateReducer, { language: true });
  return (
    <>
      <StateContext.Provider value={{ store, dispatch }}>
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
      </StateContext.Provider>
    </>
  );
}

export default App;
