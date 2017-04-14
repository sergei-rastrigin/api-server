import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import storeFactory from './store';
// AppContainer is a necessary wrapper component for HMR
import {AppContainer} from 'react-hot-loader';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const store = storeFactory();

//TODO testing actions
import { SET_GOAL } from './store/actions';
store.dispatch(SET_GOAL(6));


const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    {/*<div>*/}
                        {/*<ul>*/}
                            {/*<li><Link to="/">Home</Link></li>*/}
                            {/*<li><Link to="/about">About</Link></li>*/}
                        {/*</ul>*/}

                        {/*<hr/>*/}

                        {/*<Route exact path="/" component={HomePage}/>*/}
                        {/*<Route path="/about" component={AboutPage}/>*/}
                    {/*</div>*/}
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

export default render