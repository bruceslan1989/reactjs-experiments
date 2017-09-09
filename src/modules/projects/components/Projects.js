import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from "../actions/actions";
import Table  from "../../../components/Table";

class Projects extends Component {
    componentWillMount() {
        this.props.dispatch(actions.actionSagaFetchProjects());
    }

    render() {
        let projects = this.props.projects;
        return (
            <div>
                <h1>Projects</h1>
                <div className="projects">
                    <Table rows={projects}/>
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
