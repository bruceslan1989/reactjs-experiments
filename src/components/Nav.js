import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from '../modules/projects/components/Projects';
import About from '../components/About';

class Nav extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <Route exact path="/" component={Projects}/>
                <Route exact path="/about" component={About}/>
            </div>
        </Router>
      )
  }
}

export default Nav;
