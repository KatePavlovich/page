import React, { Component } from 'react';

class Project extends Component {
    render() {
        const { href, src, width, height, name, technologies } = this.props
        const technologiesList = technologies.map((i, index) => (
            <li key={index}>{i}
            </li>
        ))
        return (
            <a className="project-title-link" href={href} target="blank">
                <img className="img-style" src={src}
                    alt={name} width={width} height={height} />
                <h3 className="item-title">{name}</h3>
                <ul>{technologiesList}</ul>
            </a>
        )
    }
}

export default Project;