import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import WelcomeSection from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";

class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper-page">
        <Router>
          <div>
            <Route path="/" exact component={WelcomeSection} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Portfolio;
