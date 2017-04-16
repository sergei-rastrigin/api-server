import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import Home from './components/homePage';
import About from './components/aboutPage';
import Profile from './components/profilePage';
import PageNotFound from './components/pageNotFound';

const Routes = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/something-else">to something else</Link></li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/profile" component={Profile} />
                    <Route component={PageNotFound} />
                </Switch>

            </div>
        </Router>
    )
};


export default Routes;