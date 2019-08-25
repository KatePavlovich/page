import React, { Suspense } from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const Portfolio = () => {
  return (
    <div className="wrapper-page">
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </Suspense>
    </div>
  )
}

export default Portfolio
