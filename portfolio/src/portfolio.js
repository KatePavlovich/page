import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Menu from './components/menu';
import WelcomeSection from './components/aboutMe';
import Projects from './components/projects';
import Contact from './components/contact';

class Portfolio extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper-page">
            <Menu />
          <Route path='/welcomeSection' component={WelcomeSection} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

export default Portfolio;
