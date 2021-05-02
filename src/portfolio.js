import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

const Portfolio = () => {
  return (
    <div className="wrapper-page">
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
};

export default Portfolio;
