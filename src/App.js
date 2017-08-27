import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
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

  render() {
    return (
      <div className="app">
          <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
