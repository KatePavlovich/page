import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="content" id="projects">
                <h2 className="projects-section-title">Here are some of my projects...</h2>
                <ul className="grid">
                    <li className="project-tile">
                        <a className="project-title-link" href="https://katepavlovich.github.io/match-match-game1" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot1-match-game.jpg?raw=true"
                                alt="work1" width="600" height="423" />
                            <h3 className="item-title">Match-match Game</h3>
                        </a>
                    </li>
                    <li className="project-tile">
                        <a className="project-title-link" href="https://katepavlovich.github.io/game.html" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot3.jpg?raw=true"
                                alt="work2" width="600" height="423" />
                            <h3 className="item-title">Runner Game</h3>
                        </a>
                    </li>
                    <li className="project-tile">
                        <a className="project-title-link" href="https://melcom.by/" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/screenshot1-melc.jpg?raw=true"
                                alt="work3" width="600" height="423" />
                            <h3 className="item-title">Melcom.by</h3>
                        </a>
                    </li>
                    <li className="project-tile">
                        <a className="project-title-link" href="https://codepen.io/asylumhere/full/VdGyQM/" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/1.jpg?raw=true"
                                alt="work4" width="600" height="390" />
                            <h3 className="item-title">Quotes App</h3>
                        </a>
                    </li>
                    <li className="project-tile">
                        <a className="project-title-link" href="https://codepen.io/asylumhere/full/deLVZq/" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/KatePavlovich.github.io/blob/master/portfolio/img/weaterApp.jpg?raw=true"
                                alt="work5" width="600" height="390" />
                            <h3 className="item-title">Weather App</h3>
                        </a>
                    </li>
                    <li className="project-tile">
                        <a className="project-title-link" href="https://codepen.io/asylumhere/full/Kejxxw/" target="blank">
                            <img className="img-style" src="https://github.com/KatePavlovich/rsschool-codejam1-cv/blob/gh-pages/img/calculator.jpg?raw=true" alt="work5" width="780" height="665" />
                            <h3 className="item-title">Calculator on React</h3>
                        </a>
                    </li>
                </ul>
                <p className="links-align">More projects on <a className="profile-link" href="https://github.com/KatePavlovich" target="blank">github.com</a>
                    and <a className="profile-link" href="https://codepen.io/asylumhere/" target="blank">codepen.io</a>
                </p>
            </section>      
        )
    }
}

export default Projects;