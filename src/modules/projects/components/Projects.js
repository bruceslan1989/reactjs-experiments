import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from "../actions/actions";

class Projects extends Component {
    componentWillMount() {
        this.props.dispatch(actions.actionSagaFetchProjects());
    }

    render() {
        let projects;
        projects = this.props.projects.map(project => {
            return (
                <li key={project.title}>{project.title}</li>
            );
        });
        return (
            <div>
                <h1>Projects</h1>
                <div className="projects">
                    <ul>
                        {projects}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        projects: store.projects
    }
};

Projects = connect(mapStoreToProps)(Projects);

export default Projects;
