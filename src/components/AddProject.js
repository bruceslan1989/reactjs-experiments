import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    static defaultProps = {
        categories: [
            'Category 1',
            'Category 2',
            'Category 3',
        ]
    };

    constructor() {
        super();
        this.state = {
            project: {

            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.refs.title.value.trim() === '') {
            alert("Title is required!");
            return;
        }

        console.log(
            this.refs.title.value,
            this.refs.category.value
        );

        this.setState({
            project: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }
        }, function() {
            this.props.creatingCallback(this.state.project);
            this.refs.title.value = null;
            this.refs.category.value = 'Category 1';
        });
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddProject;
