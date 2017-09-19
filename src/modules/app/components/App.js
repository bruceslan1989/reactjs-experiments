import React, { Component } from 'react';
import Nav from '../../../components/Nav';

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="app">
                <Nav/>
                {children}
            </div>
        );
    }
}

export default App;