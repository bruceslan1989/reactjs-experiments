import React, { Component } from 'react';

class Project extends Component {

    handleDeleting(id) {
        this.props.deletingCallback(id);
    }

    render() {
        let project = this.props.project;
        return (
            <li className="project">
                <div>{project.title}</div>
                <div>{project.category}</div>
                <button onClick={this.handleDeleting.bind(this, project.id)}>X</button>
            </li>
        );
    }
}

export default Project;
