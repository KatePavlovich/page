import React, { Component } from "react"
import withLayout from "./Layout"

class WelcomeSection extends Component {
  render() {
    return (
      <div>
        <section className="welcome-section" id="welcome-section">
          <h1>Kate Pavlovich</h1>
          <div className="intro-wrapper">
            <img
              className="bio-photo-mob"
              src="https://github.com/KatePavlovich/rsschool-codejam1-cv/blob/gh-pages/img/bioPhoto.jpg?raw=true"
              alt="me"
              width="144"
              height="144"
            />
            <p className="description">front-end developer</p>
            <div className="contacts-wrapper">
              <p className="contacts-wrapper-item">
                tel:
                <a href="tel:+375293207933">+37529 320 79 33</a>
              </p>
              <p className="contacts-wrapper-item">
                email:
                <a href="mailto:ekate.pavlovich@gmail.com">
                  ekate.pavlovich@gmail.com
                </a>
              </p>
            </div>
          </div>
          <p className="description-indent">
            A few years ago I started with self-education and dedicated all my
            free time to studying HTML and CSS, solving tasks from different
            sources. Later I decided to go further and went on requalification
            courses on the base of second education “programmer-web-design”. As
            a designer, I studied PhotoShop, Coreldraw, Adobe Animate CC. As a
            programmer HTML, CSS, JavaScript, PHP, MySQL. Graduation project was
            written on the base of CMS.
          </p>
          <p className="description-indent">
            Participate in open source projects. Highly interested in React,
            Redux and their ecosystem.
          </p>
          <p className="description-indent">
            I am a well-organized, hard-working and responsible person with the
            passion for learning new things and great attention to detail.
            Patient, quality-oriented, versatile, empathetic. I strive for
            working both as part of a team and individually.
          </p>
          <div className="description-columns">
            <p className="description-points-style">Education: </p>
            <ul>
              <li>Belarusian State University, law faculty, 2006-2011</li>
              <li>
                School of Business of BSU, programmer-web-design, 2016-2017
              </li>
              <li>RSS, 2017-2018</li>
            </ul>
          </div>
          <div className="description-columns">
            <p className="description-points-style">Certificates</p>
            <ul>
              <li>
                <a href="https://www.freecodecamp.org/certification/kate/front-end-libraries">
                  Front End Libraries
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/certification/kate/javascript-algorithms-and-data-structures">
                  JavaScript Algorithms and Data Structures
                </a>
              </li>
              <li>
                <a href="https://www.sololearn.com/Certificate/1024-9303082/pdf/">
                  JavaScript Tutorial course
                </a>
              </li>
              <li>
                <a href="https://www.sololearn.com/Certificate/1059-9303082/pdf/">
                  PHP Tutorial course
                </a>
              </li>
              <li>
                <a href="https://www.sololearn.com/Certificate/1082-9303082/pdf/">
                  jQuery Tutorial course
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/certification/kate/responsive-web-design">
                  Responsive Web Design
                </a>
              </li>
              <li>
                <a href="http://learn.javascript.ru/courses/react-20180510/kate21/certificate.jpg">
                  React.JS
                </a>
              </li>
            </ul>
          </div>
          <div className="description-columns">
            <p className="description-points-style">Skills: </p>
            <p>
              JavaScript, HTML5, CSS3, Jquery, Sass, Bootstrap, Ajax, OOP, ES6,
              Git, React, Redux
            </p>
          </div>
          <div className="description-columns">
            <p className="description-points-style">English level: </p>
            <p>
              Graduated from gymnasium №7 in Minsk with intensive English
              language studies and German optional. English level corresponds to
              B1, am able to read fiction and technical literature and fluent in
              verbal communication
            </p>
          </div>
          <div className="description-columns">
            <a
              className="description-points-style download-button"
              href="file/Profile.pdf"
              target="_blank"
              download
            >
              download CV
            </a>
          </div>
        </section>
      </div>
    )
  }
}

export default withLayout(WelcomeSection)
