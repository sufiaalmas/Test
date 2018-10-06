import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from'./Contact';
import Projects from './Projects';
import Resume from './Resume';
import Education from './Education';
import Technologies from './Technologies';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route path="/AboutMe" component={AboutMe}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Resume" component={Resume}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Education" component={Education}/>
        <Route path="/Technologies" component={Technologies}/>
    </Switch>
)

export default Main;