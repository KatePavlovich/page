import React, { Component } from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/projects"
import Contact from "./components/Contact"

class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper-page">
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Portfolio
