import React  from 'react';
import Nav from './Nav';

const Container = ({children}) => {
    return (
        <div className="app">
            <Nav/>
            <h1>Container</h1>
            {children}
        </div>
    )
};

export default Container;
