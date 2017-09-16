import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions  from "../actions/actions";
import ProjectTable  from "../../../components/ProjectTable";

class Projects extends Component {
    componentWillMount() {
        this.props.dispatch(actions.actionSagaFetchProjects());
    }

    render() {
        let rows = this.props.projects.map(row => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                </tr>
            );
        });
        return (
            <div>
                <h1>Projects</h1>
                <div className="projects">
                    <ProjectTable rows={rows}/>
                </div>
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array
};

const mapStoreToProps = (store) => {
    return {
        projects: store.projects
    }
};

Projects = connect(mapStoreToProps)(Projects);

export default Projects;
