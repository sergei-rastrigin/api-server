import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav nav-tabs">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/something-else">to something else</Link></li>

                <li className="pull-right"><Link to="/login">Login</Link></li>
                <li className="pull-right"><Link to="/register">Register</Link></li>
                <li className="pull-right"><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    </nav>
  )
};

export default Header;