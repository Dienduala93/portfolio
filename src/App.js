import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"

import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          
          
        </Switch>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
