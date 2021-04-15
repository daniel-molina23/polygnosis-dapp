import './App.css';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Current_Stages from '../pages/Current_Stages';
import Demo from '../pages/Demo';
import Contact from '../pages/Contact';
import About from '../pages/About';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/home" component={Home}>
            <Home />
          </Route>
          <Route exact path="/" component={Home}>
            <Redirect to="/home" />
          </Route>
          <Route path="/current-stages"  component={Current_Stages}>
            <Current_Stages />
          </Route>
          <Route path="/demo-free-trial"  component={Demo}>
            <Demo />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
