import React, { Component } from 'react';
import Nav from '../../../components/Nav';

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app">
                <Nav/>
                <h1>App</h1>
                {children}
            </div>
        );
    }
}

export default App;