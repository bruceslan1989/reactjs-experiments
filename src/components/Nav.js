import React  from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/container/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/container/about">About</Link></li>
            </ul>
        </div>
    )
};

export default Nav;
