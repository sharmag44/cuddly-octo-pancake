import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Intro from "./Components/Intro";
import Project from "./Components/Project"
import Contact  from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
