import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Education } from './pages/Education/Education';
import { Experience } from './pages/Experience/Experience';

export const App = () => {

    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/education">
                <Education />
            </Route>
            <Route path="/experience">
                <Experience />
            </Route>
        </Router>
    );
};

export default App;
