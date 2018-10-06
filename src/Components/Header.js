import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import {Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div id="top">
            <div id="header">SUFIA ALMAS
            <nav id="top-nav">
                <Link to="/Home">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Technologies">Technologies</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
            </div>
            </div>
        )
    }
}