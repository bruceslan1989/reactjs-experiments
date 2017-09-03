import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from "./Project";
import AddProject from "./AddProject";

class Projects extends Component {
    componentWillMount() {
        this.props.dispatch({'type': 'CREATE', 'project': {
            title: 'Experts',
            category: 'App'
        }});
        this.props.dispatch({'type': 'CREATE', 'project': {
            title: 'Gold & People',
            category: 'App'
        }});
        this.props.dispatch({'type': 'CREATE', 'project': {
            title: 'Museums Online',
            category: 'App'
        }});
    }

    handleCreating(project) {
        this.props.dispatch({'type': 'CREATE', 'project': project});
    }

    handleDeleting(id) {
        this.props.dispatch({'type': 'DELETE', 'id': id});
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

const mapStateToProps = (store) => {
    return {
        projects: store.projects
    }
};

Projects = connect(mapStateToProps)(Projects);

export default Projects;
