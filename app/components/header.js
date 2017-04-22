import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Header = (props) => {
    const auth_button = () => {
        if (props.user.isAuthenticated) {
            return <li className="pull-right"><Link to="/logout">Logout</Link></li>
        } else {
            return <li className="pull-right"><Link to="/login">Login</Link></li>
        }
    };

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav nav-tabs">s
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/something-else">to something else</Link></li>
                    <li className="pull-right"><Link to="/register">Register</Link></li>
                    {auth_button()}
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps)(Header);