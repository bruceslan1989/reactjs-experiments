import React, { Component } from 'react';
import Project from "./Project";

class Projects extends Component {
    render() {
        let projects;
        if (this.props.projects) {
            projects = this.props.projects.map(project => {
                return (
                    <Project key={project.title} project={project} />
                );
            });
        }
        return (
            <div>
                <h1>Projects</h1>
                <div className="projects">
                    {projects}
                </div>
            </div>
        );
    }
}

export default Projects;
