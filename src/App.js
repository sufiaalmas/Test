import React, { Component } from 'react';
import {Layout,Header, Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './Components/Main';
import {Link} from 'react-router-dom';




class App extends Component {
  render() {
    return (
        
<div className="demo-big-content">
    <Layout>
        <Header title="My Portfolio" scroll className="header-color">
            <Navigation>
                <Link to="Home">Home</Link>
                <Link to="AboutMe">AboutMe</Link>
                <Link to="Education">Education</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="Home">Home</Link>
                <Link to="AboutMe">AboutMe</Link>
                <Link to="Education">Education</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
