import React, { Component } from 'react';
import { connect } from 'react-redux';

import Project from "./Project";
import AddProject from "./AddProject";

class Projects extends Component {
    componentWillMount() {
        this.props.dispatch({'type': 'CREATE', 'payload': {
            title: 'Experts',
            category: 'App'
        }});
        this.props.dispatch({'type': 'CREATE', 'payload': {
            title: 'Gold & People',
            category: 'App'
        }});
        this.props.dispatch({'type': 'CREATE', 'payload': {
            title: 'Museums Online',
            category: 'App'
        }});
    }

    handleCreating(project) {
        this.props.dispatch({'type': 'CREATE', 'payload': project});
    }

    handleDeleting(id) {
        this.props.dispatch({'type': 'DELETE', 'payload': id});
    }

    render() {
        let projects;
        projects = this.props.projects.map(project => {
            return (
                <Project key={project.title} project={project} deletingCallback={this.handleDeleting.bind(this)}/>
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

const mapStore = (store) => {
    return {
        projects: store.projects
    }
};

Projects = connect(mapStore)(Projects);

export default Projects;
