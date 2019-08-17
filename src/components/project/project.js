import React, { Component } from 'react';
import toggleOpen from '../../decorators/toggleOpen';
import { CSSTransitionGroup } from 'react-transition-group'
import './project.css';

class Project extends Component {
    render() {
        const { href, src, width, height, name, isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide skills' : 'What it gave me'
        return (
            <div className="project__container">
                <a className="project-title-link" href={href} target="blank">
                    <img className="img-style" src={src}
                        alt={name} width={width} height={height} />
                    <h3 className="item-title">{name}</h3>
                </a>
                <button onClick={toggleOpen} className="project__button">{text}</button>
                <CSSTransitionGroup
                    transitionName="toggleAnimation"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    className="toggleAnimation__container">
                    {this.getSkills()}
                </CSSTransitionGroup>

            </div>
        )
    }

    getSkills() {
        const { technologies, isOpen } = this.props
        const technologiesList = technologies.map((i, index) => (
            <li key={index}>{i}
            </li>
        ))

        return (
            isOpen && <ul>{technologiesList}</ul>
        )
    }
}

export default toggleOpen(Project);