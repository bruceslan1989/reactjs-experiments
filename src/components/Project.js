import React, { Component } from 'react';

class Project extends Component {
    render() {
        let project = this.props.project;
        return (
            <li className="project">
                <div>{project.title}</div>
                <div>{project.category}</div>
            </li>
        );
    }
}

export default Project;
