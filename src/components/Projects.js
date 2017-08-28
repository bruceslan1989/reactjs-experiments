import React, { Component } from 'react';
import Project from "./Project";
import AddProject from "./AddProject";

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [{
                title: "Title 1",
                category: "Category 1"
            }, {
                title: "Title 2",
                category: "Category 2"
            }, {
                title: "Title 3",
                category: "Category 3"
            }]
        });
    }

    handleCreating(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({
            projects: projects
        })
    }
    render() {
        let projects;
        projects = this.state.projects.map(project => {
            return (
                <Project key={project.title} project={project} />
            );
        });
        return (
            <div>
                <h1>Projects</h1>
                <AddProject creatingCallback={this.handleCreating.bind(this)}/>
                <div className="projects">
                    {projects}
                </div>
            </div>
        );
    }
}

export default Projects;
